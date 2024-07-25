// src/components/FadeSection.tsx
import React, { useState, useRef, useEffect, ReactNode } from "react";
import { SlideFade, Box } from "@chakra-ui/react";

// Define the props interface
interface SlideFadeSectionProps {
  children: ReactNode;
  delay?: number;
}

const SlideFadeSection: React.FC<SlideFadeSectionProps> = ({ children, delay = 0 }) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), delay);
        }else{
          setTimeout(() => setShow(false), delay);
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <SlideFade in={show}>
      <Box ref={ref} p={4}>
        {children}
      </Box>
    </SlideFade>
  );
};

export default SlideFadeSection;
