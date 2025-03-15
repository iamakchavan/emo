import { motion, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

function useAnimatedCounter(value: number): MotionValue<number> {
  const spring = useSpring(0, {
    duration: 2,
    bounce: 0,
    damping: 30,
    stiffness: 50,
  });

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return spring;
}

export function AnimatedCounter({ value, suffix = '' }: AnimatedCounterProps) {
  const animatedValue = useAnimatedCounter(value);
  const rounded = useTransform(animatedValue, Math.round);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
}