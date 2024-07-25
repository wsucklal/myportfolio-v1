// src/components/FadeSection.tsx
import React, { useState, useRef, useEffect, ReactNode } from "react";
import { Fade, Box } from "@chakra-ui/react";

// Define the props interface
interface FadeSectionProps {
  children: ReactNode;
  delay?: number;
}

const FadeSection: React.FC<FadeSectionProps> = ({ children, delay = 500 }) => {
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
    <Fade in={show}>
      <Box ref={ref} p={4}>
        {children}
      </Box>
    </Fade>
  );
};

export default FadeSection;
