"use client";

import { useEffect, useRef, useState } from "react";

type Animation = "fade-up" | "fade-in";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
};

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const styles: Record<Animation, { from: string; to: string }> = {
    "fade-up": {
      from: "translate-y-4 opacity-0",
      to: "translate-y-0 opacity-100",
    },
    "fade-in": {
      from: "opacity-0",
      to: "opacity-100",
    },
  };

  const style = styles[animation] || styles["fade-up"];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? style.to : style.from} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function StaggerChildren({
  children,
  animation = "fade-up",
  staggerMs = 100,
  className = "",
}: {
  children: React.ReactNode[];
  animation?: Animation;
  staggerMs?: number;
  className?: string;
}) {
  return (
    <>
      {children.map((child, i) => (
        <AnimateOnScroll
          key={i}
          animation={animation}
          delay={i * staggerMs}
          className={className}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </>
  );
}
