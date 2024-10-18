'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { X, Menu } from 'lucide-react'
import './style.sass'

interface NavLink {
    label: string
    href: string
}

const MainNavBar: React.FC = () => {
    const pathname = usePathname()
    const translate = useTranslations("navbar")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const mobileMenuRef = useRef<HTMLDivElement>(null)

    const navLinks: NavLink[] = [
        { label: translate("home"), href: '/' },
        { label: translate("about"), href: '/about' },
        { label: translate("projects"), href: '/projects' },
        { label: translate("contact"), href: '/contact' }
    ]

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                closeMobileMenu()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const renderNavLinks = (isMobile: boolean) => (
        <ul className={`nav-list ${isMobile ? 'mobile-nav-list' : ''}`}>
            {navLinks.map((link) => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className={`nav-link ${pathname === link.href ? 'active' : ''} ${isMobile ? 'mobile-nav-link' : ''}`}
                        onClick={isMobile ? closeMobileMenu : undefined}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    )

    return (
        <header className={`header ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <nav className="nav">
                <Link href="/" className="logo">
                    {translate("logo")}
                </Link>
                <div className="desktop-nav">{renderNavLinks(false)}</div>
                <div className="mobile-nav">
                    <button
                        onClick={toggleMobileMenu}
                        className="mobile-menu-button"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </nav>
            <div
                ref={mobileMenuRef}
                className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
            >
                {renderNavLinks(true)}
            </div>
        </header>
    )
}

export default MainNavBar