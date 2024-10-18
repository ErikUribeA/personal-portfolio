'use client'
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useState } from 'react'

const AnimatedLetters = ({ text }: { text: string }) => {
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
          className={`
            text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500
            transition-all duration-600 ease-in-out
            ${animationCompleted
              ? 'opacity-100 relative'
              : 'opacity-0 inline-block'
            }
          `}
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


export default function Home() {
  const translate = useTranslations("home")

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          <AnimatedLetters text={translate("greetings")} />
        </h1>
        <p className="text-2xl mb-8">{translate("subTitle")}</p>
        <Link
          href="/about"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          {translate("button")}
        </Link>
      </div>
    </section>
  )
}
