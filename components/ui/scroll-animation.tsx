"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animateFrom?: "bottom" | "left" | "right";
  delay?: number;
  className?: string;
  once?: boolean;
}

export function ScrollAnimation({
  children,
  animateFrom = "bottom",
  delay = 0,
  className,
  once = true,
  ...props
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [once]);

  const getAnimationClasses = () => {
    const baseClasses = "opacity-0 transition-all duration-700";
    const animationClasses = {
      bottom: "translate-y-8",
      left: "-translate-x-8",
      right: "translate-x-8",
    }[animateFrom];

    return cn(baseClasses, animationClasses, className);
  };

  const getAnimateInClasses = () => {
    return "!opacity-100 !translate-x-0 !translate-y-0";
  };

  return (
    <div
      ref={elementRef}
      className={cn(getAnimationClasses(), "data-[state=visible]:animate-in")}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      <style jsx global>{`
        .animate-in {
          ${getAnimateInClasses()}
        }
      `}</style>
      {children}
    </div>
  );
}