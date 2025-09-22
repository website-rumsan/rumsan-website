"use client";

import { useState, useEffect, Children } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Carousel({
  children,
  autoPlay = true,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const slides = Children.toArray(children);
  const total = slides.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 < total ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isPlaying || total === 0) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, total, currentIndex]);

  return (
    <div className="relative w-full h-full group">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl h-[480px] lg:h-[560px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Light Glass Background */}
            <div className="absolute inset-0 rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-2xl" />

            {/* Soft Accents */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/40 dark:bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-white/30 dark:bg-white/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full p-8 lg:p-12">
              {slides[currentIndex]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Navigation Controls */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Button
          onClick={prevSlide}
          size="sm"
          variant="outline"
          className="bg-white/70 hover:bg-white text-foreground border-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          onClick={togglePlayPause}
          size="sm"
          variant="outline"
          className="bg-white/70 hover:bg-white text-foreground border-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>

        <Button
          onClick={nextSlide}
          size="sm"
          variant="outline"
          className="bg-white/70 hover:bg-white text-foreground border-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div> */}
      {/* Dots Indicator */}
      <div className="absolute bottom-6 right-6 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index as number}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-foreground scale-125"
                : "bg-foreground/40 hover:bg-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
