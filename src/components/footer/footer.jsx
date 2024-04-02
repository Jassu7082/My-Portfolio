import React from 'react';
import logo from "../../assets/logo.png"
const ContactFooter = () => {
    return (
        <footer className="bg-gray-600 mt-10">
            <div className="mx-auto w-full max-w-screen-xl p-6">
                <div className="flex justify-center">
                    <div className="">
                        <a href="#" className="flex items-center">
                            <img src={logo} className="h-8 me-3 rounded-full" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jaswanth</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
