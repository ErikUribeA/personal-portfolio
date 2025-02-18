'use client'
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsGithub } from "react-icons/bs"
import { FaGlobeAmericas } from "react-icons/fa"
import { IProjects } from '@/interfaces/IProjects'
import { getIconComponent } from '@/app/utils/getIconComponent'

interface IconWithTooltipProps {
    icon: React.ElementType
    href: string
    tooltipText: string
}

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({ icon: Icon, href, tooltipText }) => {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <div className="relative">
            <a
                href={href}
                target='_blank'
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <Icon className='text-4xl text-white hover:text-pink-400 transition-colors' />
            </a>
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                    {tooltipText}
                </div>
            )}
        </div>
    )
}

export default function Projects() {
    const [projects, setProjects] = useState<IProjects[]>([])
    const [loading, setLoading] = useState(true)
    const translate = useTranslations('projects')
    const locale = useLocale() // Hook to get the current locale

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/posts")
                if (!response.ok) {
                    throw new Error("Failed to fetch")
                }
                const result = await response.json()
                setProjects(result)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return (
            <section className="min-h-screen flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500"></div>
            </section>
        )
    }

    return (
        <section className="min-h-screen flex-grow py-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {translate('title')}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="flex-grow flex-col bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden group"
                    >
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                                {locale === 'en' ? project.title_en : project.title_es}
                            </h3>
                            <p className="text-gray-300 mb-4">{project.description_en}</p>
                            <div className="relative w-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-md mb-4 overflow-hidden group">
                                <Image
                                    src={project.img}
                                    alt={project.description_en}
                                    layout="responsive"
                                    width={600}
                                    height={400}
                                    objectFit="cover"
                                    className="rounded transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className='flex gap-5'>
                                        <IconWithTooltip
                                            icon={BsGithub}
                                            href={project.linkGithub}
                                            tooltipText={translate('gitHub')}
                                        />
                                        <IconWithTooltip
                                            icon={FaGlobeAmericas}
                                            href={project.linkWeb}
                                            tooltipText={translate('web')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-2">
                                {translate('tecnologys')}
                            </p>
                            <div className='flex justify-center p-2 gap-4'>
                                {project.icons.map((icon, index) => {
                                    const IconComponent = getIconComponent(icon.library, icon.name)
                                    return IconComponent ? (
                                        <IconComponent key={index} className="text-4xl" style={{ color: icon.color }} />
                                    ) : null
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
