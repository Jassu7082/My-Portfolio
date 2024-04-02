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
        <div id="Home" className="responsive">
            <div className='w-[55%]'>
                <p className=" font-display inline-block md:text-2xl text-lg">Hi There, I'm <b>Jaswanth</b>.</p>
                <h1 className="my-6 font-display text-4xl md:text-6xl font-bold  text-slate-100">
                    <span ref={titleSpan}></span>
                </h1>
            <p className="relative  absolute mb-8 font-display inline-block md:text-2xl text-lg">always looking to Collaborate with<br></br> others to expand my skills <a href="#about" className='text-orange-400'>..read more.</a></p>
            </div>
            <div className='pl-32'>
                <Wallpaper />
            </div>
        </div>
    );
};

export default Header;
