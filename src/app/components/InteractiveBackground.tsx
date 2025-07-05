"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";

interface Line {
  x: number;
  opacity: number;
  baseOpacity: number;
  targetOpacity: number;
  animating: boolean;
  height: number;
  yOffset: number;
  visible: boolean;
  delay: number;
  scrollDirection: number; // 1 for down, -1 for up
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();
  const linesRef = useRef<Line[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [startTime, setStartTime] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const lastInteraction = useRef(Date.now());
  const mousePosition = useRef({ x: 0, y: 0 });
  // Initialize full-screen vertical lines with varied heights
  const initializeLines = useCallback((width: number, height: number) => {
    const lineSpacing = 30; // Distance between lines
    const lineCount = Math.floor(width / lineSpacing);
    const newLines: Line[] = [];
    const speed = 0.05; // Same speed as Hero component

    // Calculate base delay from Hero component timing
    // From Hero: hello + hText + name lengths
    const heroTextLength = 8 + 21 + 16; // "Welcome " + "Turning ideas into reality. — " + "Artem Ushpuras."
    const baseDelay = heroTextLength * speed;
    for (let i = 0; i < lineCount; i++) {
      const baseOpacity = 0.02 + Math.random() * 0.03; // Reduced from 0.03 + 0.05 to 0.02 + 0.03
      const lineHeight = height * (0.6 + Math.random() * 0.4); // Random height between 60-100% of screen
      const yOffset = (height - lineHeight) / 2; // Center the lines vertically

      newLines.push({
        x: i * lineSpacing + lineSpacing / 2,
        opacity: 0, // Start invisible
        baseOpacity,
        targetOpacity: 0,
        animating: false,
        height: lineHeight,
        yOffset,
        visible: false,
        delay: baseDelay + i * speed * 2, // Staggered appearance, slower than Hero text
        scrollDirection: i % 2 === 0 ? 1 : -1, // Alternating directions: even indices go down, odd go up
      });
    }
    linesRef.current = newLines;
    setStartTime(Date.now()); // Start the appearance animation
  }, []);
  // Handle mouse/touch interaction
  const handleInteraction = useCallback((clientX: number, clientY: number) => {
    lastInteraction.current = Date.now();
    mousePosition.current = { x: clientX, y: clientY };

    linesRef.current = linesRef.current.map((line) => {
      // Only interact with visible lines
      if (!line.visible) return line;

      const distance = Math.abs(line.x - clientX);
      const maxInfluence = 150; // Influence radius in pixels
      const influence = Math.max(0, maxInfluence - distance);
      if (influence > 0) {
        const intensityFactor = (influence / maxInfluence) * 0.3; // Increased from 0.15 to 0.3
        return {
          ...line,
          animating: true,
          targetOpacity: Math.min(line.baseOpacity + intensityFactor, 0.4), // Increased from 0.25 to 0.4
        };
      }
      return {
        ...line,
        animating: true,
        targetOpacity: line.baseOpacity,
      };
    });
  }, []);

  // Handle mouse events
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      handleInteraction(e.clientX, e.clientY);
    },
    [handleInteraction]
  );

  // Handle touch events
  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    [handleInteraction]
  );
  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    [handleInteraction]
  );

  // Handle scroll events
  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      setScrollY(window.scrollY);
    }
  }, []);
  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const currentTime = Date.now();
    const timeSinceInteraction = currentTime - lastInteraction.current;
    const timeSinceStart = startTime ? (currentTime - startTime) / 1000 : 0; // Convert to seconds

    // Update and draw lines
    linesRef.current = linesRef.current.map((line) => {
      let newLine = { ...line };

      // Check if line should appear based on timing
      if (!newLine.visible && timeSinceStart >= newLine.delay) {
        newLine.visible = true;
        newLine.targetOpacity = newLine.baseOpacity;
        newLine.animating = true;
      }

      // Only process visible lines
      if (!newLine.visible) {
        return newLine;
      } // Gentle wave effect when no interaction
      if (timeSinceInteraction > 2000) {
        // 2 seconds
        const waveEffect =
          Math.sin(currentTime * 0.0008 + line.x * 0.008) * 0.02; // Back to original 0.02
        newLine.targetOpacity = Math.max(line.baseOpacity + waveEffect, 0.01);
        newLine.animating = true;
      }

      // Smooth animation towards target
      if (newLine.animating) {
        const opacityDiff = newLine.targetOpacity - newLine.opacity;
        newLine.opacity += opacityDiff * 0.06; // Smooth interpolation

        // Stop animating when close enough
        if (Math.abs(opacityDiff) < 0.001) {
          newLine.animating = false;
        }
      } // Only draw if opacity is visible
      if (newLine.opacity > 0.001) {
        // Calculate scroll-based vertical offset with alternating directions and cycling
        const scrollCycle = Math.sin((scrollY / 800) * Math.PI); // Complete cycle every 800px of scroll
        const baseScrollMultiplier = (line.x / dimensions.width) * 0.05; // Reduced from 0.2 to 0.133 (0.2 / 1.5)
        const cyclicMultiplier = baseScrollMultiplier * scrollCycle; // Apply sinusoidal cycling
        const scrollOffset = scrollY * cyclicMultiplier * line.scrollDirection; // Apply direction
        const adjustedYOffset = newLine.yOffset + scrollOffset;

        // Draw vertical line with gradient matching nile color scheme
        const gradient = ctx.createLinearGradient(
          0,
          adjustedYOffset,
          0,
          adjustedYOffset + newLine.height
        );
        gradient.addColorStop(
          0,
          `rgba(175, 181, 242, ${newLine.opacity * 0.2})`
        ); // nile-300 top (fade in)
        gradient.addColorStop(0.2, `rgba(123, 116, 224, ${newLine.opacity})`); // nile-500
        gradient.addColorStop(0.5, `rgba(107, 89, 210, ${newLine.opacity})`); // nile-600 middle (strongest)
        gradient.addColorStop(0.8, `rgba(91, 70, 186, ${newLine.opacity})`); // nile-700
        gradient.addColorStop(1, `rgba(64, 56, 119, ${newLine.opacity * 0.2})`); // nile-900 bottom (fade out)

        ctx.fillStyle = gradient;

        // Draw multiple thin lines to create the |||| effect
        const lineWidth = 2;
        const lineGap = 1;
        const totalWidth = lineWidth * 4 + lineGap * 3; // 4 lines with 3 gaps
        const startX = newLine.x - totalWidth / 2;

        for (let i = 0; i < 4; i++) {
          const x = startX + i * (lineWidth + lineGap);
          ctx.fillRect(x, adjustedYOffset, lineWidth, newLine.height);
        }
      }

      return newLine;
    });
    animationIdRef.current = requestAnimationFrame(animate);
  }, [startTime, scrollY, dimensions.width]);

  // Handle window resize
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });

      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }

      initializeLines(width, height);
    };

    // Initial setup
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initializeLines]);
  // Setup event listeners and start animation
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Start animation loop
    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      // Cleanup
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("scroll", handleScroll);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [
    handleMouseMove,
    handleTouchMove,
    handleTouchStart,
    handleScroll,
    animate,
  ]);
  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      width={dimensions.width}
      height={dimensions.height}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.25 }} // Start showing after Hero text animation begins
      style={{
        background: "transparent",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
