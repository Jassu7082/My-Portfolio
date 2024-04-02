
import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';

const FeedbackForm = () => {
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPhoneno, setNewPhoneno] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const contactCollection=collection(db,"contact"); 
    const Submit = async () => {
        console.log(newName, newEmail, newPhoneno, newMessage);
        if (newName != '' || newEmail != '' || newPhoneno != '' || newMessage != '') {
        try {
            await addDoc(contactCollection, { Name: newName, Email: newEmail, Phoneno: newPhoneno, Message: newMessage });
            setNewName('');
            setNewEmail('');
            setNewPhoneno('');
            setNewMessage('');
            toast.success("Contact information submitted successfully, will reach you soon");
        } catch (err) {
            toast.error("Something Went Wrong.Please Try Again");
        }
    } else{
        toast.error("Please fill all the fields");
    }
    }
    return (
        <div id="contact" className="flex flex-col justify-center items-center mt-10">
            <Toaster />
            <div style={{ opacity: 1, transform: 'none' }}>
                <div className="flex w-fit justify-center bg-[#ffffff] bg-opacity-[0.16] py-2 px-6 rounded-[25px] hover:border-zinc-400 duration-300 ease-in mb-6 border-[1.5px] border-[#515151] backdrop-filter backdrop-blur-2xl">
                    <div className="flex justify-center items-center gap-2">
                        <div className="text-[13px] sm:text-[17px] font-semibold">Contact</div>
                    </div>
                </div>
            </div>
            <div style={{ opacity: 1, transform: 'none' }}>
                <div className="flex flex-col items-center justify-center gap-y-3 mt-[50px]">
                    <input
                        placeholder="Full Name"
                        required
                        id="name"
                        className="px-5 py-2 w-[350px] border-[#27272A] border-[1.5px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#ffffff] focus:outline focus:outline-offset-[3px] bg-white bg-opacity-[0.02] backdrop-blur-[2px]"
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        name="Name"

                    />
                    <input
                        placeholder="Email"
                        required
                        id="email"
                        className="px-5 py-2 w-[350px] border-[#27272A] border-[1.5px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#ffffff] focus:outline focus:outline-offset-[3px] bg-white bg-opacity-[0.02] backdrop-blur-[2px]"
                        type="email"
                        name="Email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                    />
                    <input
                        placeholder="Mobile No."
                        id="mobileNo"
                        className="px-5 py-2 w-[350px] border-[#27272A] border-[1.5px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#ffffff] focus:outline focus:outline-offset-[3px] bg-white bg-opacity-[0.02] backdrop-blur-[2px]"
                        type="text"
                        name="Phoneno"
                        value={newPhoneno}
                        onChange={(e) => setNewPhoneno(e.target.value)}
                    />
                    <textarea
                        placeholder="Feedback"
                        required
                        id="message"
                        name="Message"
                        rows="5"
                        className="px-5 py-2 w-[350px] border-[#27272A] border-[1px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#ffffff] focus:outline focus:outline-offset-[3px] bg-white bg-opacity-[0.02] backdrop-blur-[2px]"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#28282a97] px-5 py-2 w-[350px] border-[#343437] border-[1px] rounded-md text-white focus:outline-[2px] focus:outline-[#ffffff] focus:outline focus:outline-offset-[3px] hover:bg-[#27272A] hover:border-[#39393c] transition duration-300 ease-in-out"
                        onClick={Submit}
                    >
                        Send
                    </button>
                </div>
            </div>

        </div>
    );
};

export default FeedbackForm;
