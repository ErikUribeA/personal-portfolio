'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import AnimatedLetters from '../components/effect/animatedLetters'

export default function Home() {
  const translate = useTranslations("home")

  return (
    <section className="min-h-[calc(100vh-200px)] lg:min-h-[calc(100vh-100px)] flex items-center  justify-center ">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          <AnimatedLetters
            text={translate("greetings")}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </h1>
        <p className="text-2xl mb-8">{translate("subTitle")}</p>
        <Link
          href="/about"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hoverlg:to-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          {translate("button")}
        </Link>
      </div>
    </section>
  )
}