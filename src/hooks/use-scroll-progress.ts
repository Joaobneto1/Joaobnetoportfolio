import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsVisible(scrolled > 300); // Mostra botão após 300px de scroll
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Atualiza no mount

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return { scrollProgress };
}
