'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './style.sass'
import { useTranslations } from 'next-intl'

interface NavLink {
    label: string
    href: string
}

const MainNavBar: React.FC = () => {
    const pathname = usePathname()
    const translate = useTranslations("navbar")

    const navLinks: NavLink[] = [
        { label: translate("home"), href: '/' },
        { label: translate("about"), href: '/about' },
        { label: translate("projects"), href: '/projects' },
        { label: translate("contact"), href: '/contact' }
    ]

    return (
        <header className="header">
            <nav className="nav">
                <Link href="/" className="logo">
                {translate("logo")}
                </Link>
                <ul className="nav-list">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`nav-link ${pathname === link.href && 'active' }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavBar
