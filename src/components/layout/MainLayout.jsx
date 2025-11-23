import { useEffect, useState } from 'react';
import Contact from '../../pages/Contact';
import Project from '../../pages/Project';
import NeonCursorGlow from "../animations/NeonCursorGlow"
import { FaArrowUp } from 'react-icons/fa';
import CertificatePage from '../../pages/CertificatePage';
import WorkExperiencePage from '../../pages/WorkExperiencePage';
import AboutMePage from '../../pages/AboutMePage';

export default function MainLayout() {

    const [visible, setVisible] = useState(false);
    const SCROLL_THRESHOLD = 500;

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function handleScroll() {
        if (window.scrollY > SCROLL_THRESHOLD) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return (() => {
            window.removeEventListener('scroll', handleScroll);
        })
    }, [])


    return (
        <>
            <div className='lg:mx-24 sm:mx-4 flex flex-col'>
                <AboutMePage />
                <WorkExperiencePage />
                <CertificatePage/>
                <Project />
                <Contact />
            </div>
            <div className='backdrop-blur-xl bg-white/10 shadow-2xl flex justify-center'>
                <p className='py-4 text-sm text-white'>Made by me and myself @2025 with support from several other dev!</p>
            </div>

            <div className={`fixed bottom-5 right-5 ${visible ? '' : 'hidden'}`}>
                <button onClick={scrollToTop} className='rounded-full backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-2 text-white text-xs cursor-pointer hover:scale-103 hover:bg-white/15 transition'>
                    <span className='flex flex-row items-center'><FaArrowUp />&nbsp;Back to Top</span>
                </button>
            </div>
            <NeonCursorGlow />
        </>

    );
};