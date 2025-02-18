'use client'

import React, { useState, useEffect } from 'react'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation"

export default function FloatingButton() {
    const [language, setLanguage] = useState('en')
    const router = useRouter()

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language')
        if (savedLanguage) {
            setLanguage(savedLanguage)
        }
    }, [])

    const handleClick = () => {
        const newLanguage = language === 'en' ? 'es' : 'en'
        setLanguage(newLanguage)

        Cookies.set("locale", newLanguage)
        router.refresh()

    }

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-8 right-8 p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 z-50"
            aria-label={language === 'en' ? "Cambiar a Español" : "Change to English"}
        >
            {language === 'en' ? "ES" : "EN"}
        </button>
    )
}
