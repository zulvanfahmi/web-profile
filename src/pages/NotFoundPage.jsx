import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NeonCursorGlow from "../components/animations/NeonCursorGlow";
import { useEffectOnce, useLocalStorage } from 'react-use';

export default function NotFoundPage() {
    const [seconds, setSeconds] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(timerId);

        } else if (seconds === 0) {
            navigate('/');

        }
    }, [seconds, navigate]);

    const [theme, setTheme] = useLocalStorage('theme', '');

    useEffectOnce(() => {
        if (theme === '') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <div className="mx-4 mt-12 sm:mx-12 sm:my-10 flex justify-center">
                <p className="text-lg sm:text-2xl text-white text-center">
                    Page is Not Found. Redirecting to Main Page in {seconds} seconds.
                </p>
            </div>

            <NeonCursorGlow />
        </>
    );
}