import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Header.css'; // Import CSS file
import Wallpaper from './wallpaper';

const Header = () => {
    const titles = ["MERN Stack Developer", "Full Stack Developer"]; // Array of titles
    const titleSpan = useRef(null);

    useEffect(() => {
        const options = {
            strings: titles,
            typeSpeed: 50, // Typing speed in milliseconds
            loop: true, // Set to true if you want the animation to loop
            backDelay: 2000 // Delay before typing the next string
        };
        const typed = new Typed(titleSpan.current, options);
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="Home" className="flex flex-col gap-2 m-2  container justify-center md:flex-1 md:max-w-[850px] pt-16 sm:items-center w-full">
            <div className='flex-none w-[50%]'>
                <p className="obscure-stars mb-8 font-display inline-block md:text-2xl text-lg">Hi There, I'm <b>Jaswanth</b>.</p>
                <h1 className="font-display text-4xl    md:text-6xl font-bold text-slate-900 dark:text-slate-100">
                    <span ref={titleSpan}></span>
                </h1>
            </div>
            <p className="obscure-stars relative  absolute mb-8 font-display inline-block md:text-2xl text-lg">always looking to Collaborate with<br></br> others to expand my skills <a href="#about" className='text-orange-400'>..read more.</a></p>
            <div className='flex-inline w-[50%] translate-x-[150%] ' >
                <Wallpaper />
            </div>
        </div>
    );
};

export default Header;