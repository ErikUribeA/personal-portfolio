import React from 'react'
import { Inter } from 'next/font/google'
import MainNavBar from '@/app/components/navbar/mainNavbar'
import Footer from '@/app/components/footer/footer'
import { Metadata } from 'next'
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import FloatingButton from '../components/button/floatingButton'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Mi aplicación Next.js',
    description: 'Descripción de mi aplicación',
}


export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <div className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 text-white`}>
                        <MainNavBar />
                        <main className="flex-grow container mx-auto py-10 lg:py-0  px-6 mt-[50px] lg:mt-0 ">
                            {children}
                        </main>
                        <FloatingButton />
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>

    )
}