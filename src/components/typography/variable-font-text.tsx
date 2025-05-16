import React, { useCallback, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { useMousePositionRef } from "../../hooks/use-mouse-position-ref";

interface FontVariationAxis {
  name: string;
  min: number;
  max: number;
}

interface FontVariationMapping {
  x: FontVariationAxis;
  y: FontVariationAxis;
}

interface TextProps {
  label: string;
  fontVariationMapping: FontVariationMapping;
  containerRef: React.RefObject<HTMLElement>;
  className?: string;
  onClick?: () => void;
}

const VariableFontText = ({
  label,
  fontVariationMapping,
  className,
  containerRef,
  onClick,
  ...props
}: TextProps) => {
  const mousePositionRef = useMousePositionRef(containerRef);
  const spanRef = useRef<HTMLSpanElement>(null);

  const interpolateFontVariationSettings = useCallback(
    (xPosition: number, yPosition: number) => {
      const container = containerRef.current;
      if (!container) return "'wght' 400, 'slnt' 0"; // Updated default values

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const xProgress = Math.min(Math.max(xPosition / containerWidth, 0), 1);
      const yProgress = Math.min(Math.max(yPosition / containerHeight, 0), 1);

      const xValue =
        fontVariationMapping.x.min +
        (fontVariationMapping.x.max - fontVariationMapping.x.min) * xProgress;
      const yValue =
        fontVariationMapping.y.min +
        (fontVariationMapping.y.max - fontVariationMapping.y.min) * yProgress;

      return `'${fontVariationMapping.x.name}' ${xValue}, '${fontVariationMapping.y.name}' ${yValue}`;
    },
    [containerRef, fontVariationMapping]
  );

  useAnimationFrame(() => {
    const settings = interpolateFontVariationSettings(
      mousePositionRef.current.x,
      mousePositionRef.current.y
    );
    if (spanRef.current) {
      spanRef.current.style.fontVariationSettings = settings;
    }
  });

  return (
    <motion.span
      ref={spanRef}
      className={`${className || ""} inline-block`}
      onClick={onClick}
      {...props}
    >
      {label}
    </motion.span>
  );
};

export default VariableFontText;