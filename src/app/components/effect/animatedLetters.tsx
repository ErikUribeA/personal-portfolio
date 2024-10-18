'use client'
import { motion } from "framer-motion"
import React, { useState } from 'react'

interface AnimatedLettersProps {
    text: string;
    className?: string;
}

const AnimatedLetters = ({ text, className = '' }: AnimatedLettersProps) => {
    const letters = text.split("")
    const [animationCompleted, setAnimationCompleted] = useState(false)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                when: "beforeChildren",
                delayChildren: 0.2,
            },
        },
    }

    const letterVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => {
                setTimeout(() => setAnimationCompleted(true), 600)
            }}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={letterVariants}
                    className={`${className} transition-all duration-600 ease-in-out`}
                    style={{
                        position: animationCompleted ? 'static' : 'relative',
                    }}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    )
}

export default AnimatedLetters