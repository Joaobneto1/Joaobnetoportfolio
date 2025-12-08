import { useScrollProgress } from "@/hooks/use-scroll-progress";

export const ScrollProgressBar = () => {
  const { scrollProgress } = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

