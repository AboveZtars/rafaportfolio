"use client"

import React, { useState } from "react"
import { motion, useAnimate } from "framer-motion"

interface TextProps {
  label: string
  reverse?: boolean
  transition?: any
  staggerDuration?: number
  staggerFrom?: "first" | "last" | "center" | number
  className?: string
  onClick?: () => void
}

const LetterSwapForward = ({
  label,
  reverse = true,
  transition = {
    type: "spring",
    duration: 0.7,
  },
  staggerDuration = 0.03,
  staggerFrom = "first",
  className,
  onClick,
  ...props
}: TextProps) => {
  const [scope, animate] = useAnimate()
  const [blocked, setBlocked] = useState(false)

  const hoverStart = () => {
    if (blocked) return

    setBlocked(true)

    // Function to merge user transition with stagger and delay
    const mergeTransition = (baseTransition: any) => ({
      ...baseTransition,
      delay: calculateStaggerDelay(label.length, staggerFrom, staggerDuration),
    })

    animate(
      ".letter",
      { y: reverse ? "100%" : "-100%" },
      mergeTransition(transition)
    ).then(() => {
      animate(
        ".letter",
        {
          y: 0,
        },
        {
          duration: 0,
        }
      ).then(() => {
        setBlocked(false)
      })
    })

    animate(
      ".letter-secondary",
      {
        top: "0%",
      },
      mergeTransition(transition)
    ).then(() => {
      animate(
        ".letter-secondary",
        {
          top: reverse ? "-100%" : "100%",
        },
        {
          duration: 0,
        }
      )
    })
  }

  // Helper function to calculate stagger delays
  const calculateStaggerDelay = (
    length: number, 
    from: "first" | "last" | "center" | number, 
    duration: number
  ) => {
    return (i: number) => {
      if (from === "first") return i * duration;
      if (from === "last") return (length - 1 - i) * duration;
      if (from === "center") {
        const center = Math.floor(length / 2);
        return Math.abs(i - center) * duration;
      }
      if (typeof from === "number") {
        return Math.abs(i - from) * duration;
      }
      return i * duration;
    };
  };

  return (
    <span
      className={`flex justify-center items-center relative overflow-hidden ${className}`}
      onMouseEnter={hoverStart}
      onClick={onClick}
      ref={scope}
      {...props}
    >
      <span className="sr-only">{label}</span>

      {label.split("").map((letter: string, i: number) => {
        return (
          <span
            className="whitespace-pre relative flex"
            key={i}
            aria-hidden={true}
          >
            <motion.span className={`relative letter`} style={{ top: 0 }}>
              {letter}
            </motion.span>
            <motion.span
              className="absolute letter-secondary"
              style={{ top: reverse ? "-100%" : "100%" }}
            >
              {letter}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}

export default LetterSwapForward