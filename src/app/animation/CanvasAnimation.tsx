"use client";
import React, { useRef, useEffect } from "react";

type Square = {
  x: number;
  y: number;
  baseSize: number;
  size: number;
  delay: number;
};

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const SQUARE_SIZE = 6; // Size of each square (e.g., 6x6 pixels)
  const GAP = 14; // Gap between squares

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const squares: Square[] = [];
        const squaresPerRow = Math.ceil(
          window.innerWidth / (SQUARE_SIZE + GAP)
        );
        const squaresPerColumn = Math.ceil(
          window.innerHeight / (SQUARE_SIZE + GAP)
        );

        for (let y = 0; y < squaresPerColumn; y++) {
          for (let x = 0; x < squaresPerRow; x++) {
            squares.push({
              x: x * (SQUARE_SIZE + GAP),
              y: y * (SQUARE_SIZE + GAP),
              baseSize: SQUARE_SIZE,
              size: 0, // Start from 0 size for the wave effect
              delay: (x + y) * 50, // Delay based on position
            });
          }
        }

        const drawSquare = (square: Square) => {
          ctx.fillStyle = "white";
          ctx.fillRect(square.x, square.y, square.size, square.size);
        };

        let animationFrameId: number;

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const currentTime = performance.now();

          squares.forEach((square) => {
            if (currentTime - 2000 > square.delay) {
              // Wait for 4 seconds before starting
              square.size = Math.min(square.size + 1, square.baseSize); // Increase size until it reaches baseSize
            }
            drawSquare(square);
          });

          animationFrameId = requestAnimationFrame(animate);
        };

        // Wait 4 seconds after the component mounts before starting the animation
        setTimeout(() => {
          animate();
        }, 100);

        return () => {
          cancelAnimationFrame(animationFrameId);
        };
      }
    }
  }, []);

  return (
    // <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
    <div></div>
  );
};

export default CanvasAnimation;
