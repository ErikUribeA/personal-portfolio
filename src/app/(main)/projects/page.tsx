'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaReact } from 'react-icons/fa'
import { TbBrandTypescript } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaCss3 } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { useState } from 'react';
import { IconType } from 'react-icons/lib';
import { RiNextjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";


interface IconWithTooltipProps {
    icon: IconType;
    href: string;
    tooltipText: string;
}

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({ icon: Icon, href, tooltipText }) => {
    const [showTooltip, setShowTooltip] = useState(false);

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
    );
};

export default function Projects() {
    const translate = useTranslations('projects')

    const projects = [
        {
            id: 1,
            title: translate('project1.title'),
            description: translate('project1.description'),
            img: '/images/project1.jpg',
            linkGithub: 'https://github.com/ErikUribeA/next-simulacrum',
            linkWeb: 'https://next-simulacrum.vercel.app',
            icons: [
                <FaReact key="react" className="inline-block text-4xl text-[#60a5fa]" />,
                <TbBrandTypescript key="react" className='inline-block text-4xl text-[#c084fc]' />,
                <FaSass key="react" className='inline-block text-4xl text-[#f472b6]' />,
                <RiNextjsLine key="react" className='inline-block text-4xl text-[#60a5fa]' />
            ]
        },
        {
            id: 2,
            title: translate('project2.title'),
            description: translate('project2.description'),
            img: '/images/project2.jpg',
            linkGithub: 'https://github.com/ErikUribeA/prueba',
            linkWeb: 'https://postfriendly.vercel.app/?vercelToolbarCode=0oCPQch1rUlf8-L',
            icons: [
                <FaReact key="react" className="inline-block text-4xl text-[#60a5fa]" />,
                <TbBrandTypescript key="react" className='inline-block text-4xl text-[#c084fc]' />,
                <BiLogoTailwindCss key="react" className='inline-block text-4xl text-[#f472b6]' />,
                <RiNextjsLine key="react" className='inline-block text-4xl text-[#60a5fa]' />
            ]
        },
        {
            id: 3,
            title: translate('project3.title'),
            description: translate('project3.description'),
            img: '/images/project3.jpg',
            linkGithub: 'https://github.com/AlejandroEchavarriaRiwi/restadmin',
            linkWeb: 'https://www.restadmin.co',
            icons: [
                <FaReact key="react" className="inline-block text-4xl text-[#60a5fa]" />,
                <TbBrandTypescript key="react" className='inline-block text-4xl text-[#c084fc]' />,
                <FaSass key="react" className='inline-block text-4xl text-[#f472b6]' />,
                <BiLogoTailwindCss key="react" className='inline-block text-4xl text-[#60a5fa]' />,
                <FaCss3 key="react" className='inline-block text-4xl text-[#c084fc]' />,
                <RiNextjsLine key="react" className='inline-block text-4xl text-[#f472b6]' />
            ]
        },
        {
            id: 4,
            title: translate('project4.title'),
            description: translate('project4.description'),
            img: '/images/project4.jpg',
            linkGithub: 'https://github.com/AlejandroEchavarriaRiwi/api-dragon-ball-z',
            linkWeb: 'https://alejandroechavarriariwi.github.io/dragonballriwi.github.io/',
            icons: [
                <TbBrandTypescript key="react" className='inline-block text-4xl text-[#60a5fa]' />,
                <FaCss3 key="react" className='inline-block text-4xl text-[#c084fc]' />
            ]
        },
        {
            id: 5,
            title: translate('project5.title'),
            description: translate('project5.description'),
            img: '/images/project5.jpg',
            linkGithub: 'https://github.com/ErikUribeA/rickAndMorty-API',
            linkWeb: 'https://rickmortyapi1.netlify.app',
            icons: [
                <TbBrandTypescript key="react" className='inline-block text-4xl text-[#60a5fa]' />,
                <FaCss3 key="react" className='inline-block text-4xl text-[#c084fc]' />
            ]
        },
        {
            id: 6,
            title: translate('project6.title'),
            description: translate('project6.description'),
            img: '/images/project6.jpg',
            linkGithub: 'https://github.com/AlejandroEchavarriaRiwi/proyecto',
            linkWeb: 'https://alejandroechavarriariwi.github.io/proyecto/',
            icons: [
                <RiJavascriptLine key="react" className='inline-block text-4xl text-[#60a5fa]' />,
                <FaCss3 key="react" className='inline-block text-4xl text-[#c084fc]' />,
                <AiOutlineHtml5 key="react" className='inline-block text-4xl text-[#f472b6]' />
            ]
        },
    ]

    return (
        <section className="min-h-screen flex-grow py-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> {translate('title')} </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="flex-grow flex-col bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden group"
                    >
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-pink-400 mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="relative w-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-md mb-4 overflow-hidden group">
                                <Image
                                    src={project.img}
                                    alt={project.title}
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
                                {project.icons && project.icons.map((icon, index) => (
                                    <span key={index}>{icon}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
