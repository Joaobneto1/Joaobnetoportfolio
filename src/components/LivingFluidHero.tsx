import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useAnimation } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "next-themes";
import { Github, Linkedin, Mail, MapPin, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// =================================
//  SHADER & 3D COMPONENTS
// =================================

// Create a reusable shader material for the fluid effect
const FluidMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0, 0),
    uColorA: new THREE.Color("#8A2BE2"),
    uColorB: new THREE.Color("#4B0082"),
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec3 vNormal;

    // Simplex 3D noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
        vNormal = normalize(normalMatrix * normal);
        float mouseDist = distance(position.xy, uMouse * 2.0);
        float displacement = snoise(position * 2.5 + uTime * 0.2) * 0.3;
        displacement -= smoothstep(0.0, 1.5, mouseDist) * 0.5;

        vec3 newPosition = position + normal * displacement;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec3 vNormal;
    void main() {
        float fresnel = pow(1.0 + dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        vec3 color = mix(uColorA, uColorB, vNormal.y * 0.5 + 0.5);
        gl_FragColor = vec4(color + fresnel * 0.2, 1.0);
    }
  `
);

extend({ FluidMaterial });

// The internal 3D scene component
const FluidScene = () => {
    const materialRef = useRef<any>();
    const mouse = useRef(new THREE.Vector2(0,0));

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        const { clock } = state;
        if (materialRef.current) {
            materialRef.current.uTime = clock.getElapsedTime();
            materialRef.current.uMouse.lerp(mouse.current, 0.05);
        }
    });

    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Cores monocromáticas que combinam com o tema
    // No tema light: cores escuras (pretas) - como era antes
    // No tema dark: cores claras (brancas)
    const lightColorA = useMemo(() => new THREE.Color("#000000"), []); // Preto
    const lightColorB = useMemo(() => new THREE.Color("#1a1a1a"), []); // Preto muito escuro
    const darkColorA = useMemo(() => new THREE.Color("#f2f2f2"), []); // Quase branco
    const darkColorB = useMemo(() => new THREE.Color("#cccccc"), []); // Cinza claro

    // Determina se está em dark mode (considera resolvedTheme para evitar flash)
    // Por padrão, assume light mode (cores pretas) se não estiver montado
    const isDarkMode = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : false;

    return (
        <mesh>
            <icosahedronGeometry args={[1.5, 64]} />
            {/* @ts-ignore */}
            <fluidMaterial 
                ref={materialRef} 
                key={FluidMaterial.key}
                uColorA={isDarkMode ? darkColorA : lightColorA}
                uColorB={isDarkMode ? darkColorB : lightColorB}
                blending={isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending}
                transparent={isDarkMode}
            />
        </mesh>
    );
};

// --- Main Hero Component ---
export const LivingFluidHero = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].hero;
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    textControls.start(i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + 0.5,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }));
    buttonControls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, duration: 0.8 }
    });
  }, [textControls, buttonControls]);

  const name = "João Batista Neto";
  
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* Top Right Controls */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-3">
        {/* Theme Toggle */}
        <div className="bg-background/10 backdrop-blur-sm rounded-lg p-1 border border-border/30">
          <ThemeToggle />
        </div>
        
        {/* Language Toggle */}
        <Button
          onClick={toggleLanguage}
          size="sm"
          variant="outline"
          className="bg-background/10 backdrop-blur-sm border-border/30 text-foreground hover:bg-foreground hover:text-background"
        >
          <Languages className="mr-2 h-4 w-4" />
          {language === 'pt' ? 'EN' : 'PT'}
        </Button>
      </div>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* 3D Fluid Background - Container larger than fluid to avoid visible clipping */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none" style={{ marginTop: '-60px' }}>
        <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] opacity-50">
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
            <Suspense fallback={null}>
              <FluidScene />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Hero Content - Centered with clear hierarchy */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Avatar className="h-32 w-32 md:h-40 md:w-40 ring-4 ring-offset-4 ring-offset-background ring-primary/50 shadow-2xl">
            <AvatarImage 
              src="/profile-photo.jpeg" 
              alt={name}
              className="object-cover"
            />
            <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">
              JBN
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-3"
        >
          {t.greeting}
        </motion.p>

        {/* Name - Main focus */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-4">
          {name.split("").map((char, i) => (
            <motion.span 
              key={i} 
              custom={i} 
              initial={{ opacity: 0, y: 50 }} 
              animate={textControls} 
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Role */}
        <motion.p
          custom={name.length}
          initial={{ opacity: 0, y: 30 }}
          animate={textControls}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-6"
        >
          {t.role}
        </motion.p>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-2 text-muted-foreground mb-8 bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm">Maceió/AL, Brasil</span>
        </motion.div>

        {/* Social Links - Clean horizontal layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={buttonControls}
          className="flex items-center gap-3 mb-8"
        >
          <a
            href="https://github.com/Joaobneto1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/joaobatista011/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:joaobneto03@outlook.com"
            className="p-3 rounded-full bg-card border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={buttonControls}
        >
          <Button 
            asChild 
            size="lg" 
            className="shadow-glow text-base px-8"
          >
            <a href="#contact">
              {t.contact}
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default LivingFluidHero;
