'use client'
import Link from 'next/link';
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'



const EmailSection = () => {


    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 mx-40 my-12 md:my-12 py-24 gap-4 relative "
        >

            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Let`s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-5'>
                    <Link href='https://linkedin.com/in/murat-öncel-8953601b1' target='_blank'>
                        <AiFillLinkedin className='text-white ' size={50} />
                    </Link>
                    <Link href='https://github.com/9murat' target='_blank'>
                        <AiFillGithub className='text-white ' size={50} />
                    </Link>

                </div>
            </div>
            <div>

                <div className='text-white'>
                    <div className='text-xl font-bold text-white my-2'>Email</div>
                    <div className='text-[#ADB7BE] mb-4 max-w-md'>muratoncel77@gmail.com</div>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;




