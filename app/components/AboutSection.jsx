'use client'
import Image from 'next/image';
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';
import Link from 'next/link';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2 '>
                <li>HTML-5</li>
                <li>Css-3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js (loading...)</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <div>
                <ul className='list-disc pl-2 '>
                    <h3>Erzincan Binali Yıldırım University</h3>
                    <span>Aircraft Technology (completed)</span>
                </ul> <br />
                <ul className='list-disc pl-2 '>
                    <h3>19 Mayıs University </h3>
                    <span>Computer Programming (continues)</span>
                </ul>
            </div>

        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <div>
                <ul className='list-disc pl-2 '>
                    <h3>Web Programming Turkcell Future Writers</h3>
                    <span>JavaScript Tutorial</span>

                </ul> <br />
                <ul>
                    <h3>Software Developer and Bootcamp </h3>
                    <span>React Tutorial</span>
                </ul>
            </div>

        )
    },
    {
        title: 'Projects',
        id: 'projects',
        content: (
            <ul className='list-disc pl-2 '>
                <li>
                    <Link href='https://github.com/9murat/blog_post_app1' target='_blank'>Blog Post App <span>(React.js)</span></Link>
                </li>
                <li>
                    <Link href='https://github.com/9murat/money-spending-app' target='_blank'>Money Spending App <span>(React.js)</span></Link>
                </li>
                <li>
                    <Link href='https://github.com/9murat/world-weather-app-with-react-redux-tailwind' target='_blank'>World Weather App <span>(React.js)</span></Link>
                </li>
                <li>
                    <Link href='https://github.com/9murat/e-commerce-site-with-javascript-redux' target='_blank'>E-Commerce App <span>(React.js)</span></Link>
                </li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <div>Now, I have any experience about Front-End Developer.</div>

        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
                <Image src='/front-end-developer.png' alt='front-end-developer image' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
                    <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
                    <p className='text-base lg:text-lg '> I'm Murat Öncel, 24 years old. I know programming language JavaScript (React.js, Next.js ). I aim to constantly improve myself to adapt to new technologies and best practices. I developed applications such as e-commerce site, to-do list, money spending application and LinkedIn-like blog post sharing application with the React library of the Javascript programming language.</p>

                    <div className='flex flex-row justify-start  mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange('skills')}
                            active={tab === 'skills'}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('education')}
                            active={tab === 'education'}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('certifications')}
                            active={tab === 'certifications'}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('projects')}
                            active={tab === 'projects'}
                        >
                            {" "}
                            Projects{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('experience')}
                            active={tab === 'experience'}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection;


