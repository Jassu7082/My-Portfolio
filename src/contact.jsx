
import React from 'react';
const FeedbackForm = () => {
    function Submit(e) {
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
          "https://script.google.com/macros/s/AKfycbymwD6vi82X0sF7MNmGTG3mIrWQdD6om31wvu1EQDyh-9AkTJiWawU87jHlF4z6iSenfw/exec",
          {
            method: "POST",
            body: formDatab
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    return (
        <div id="contact" className="flex flex-col justify-center items-center mt-10">
            
                    <div style={{ opacity: 1, transform: 'none' }}>
                        <div className="flex w-fit justify-center bg-[#ffffff] bg-opacity-[0.16] py-2 px-6 rounded-[25px] hover:border-zinc-400 duration-300 ease-in mb-6 border-[1.5px] border-[#515151] backdrop-filter backdrop-blur-2xl">
                            <div className="flex justify-center items-center gap-2">
                                <div className="text-[13px] sm:text-[17px] font-semibold">Contact</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ opacity: 1, transform: 'none' }}>
                        <form onSubmit={(e) => Submit(e)} className="flex flex-col items-center justify-center gap-y-3 mt-[50px]">
                            <input
                                placeholder="Full Name"
                                required
                                id="name"
                                className="px-5 py-2 w-[350px] border-[#27272A] border-[1.5px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#ffffff] focus:outline focus:outline-offset-[3px] bg-white bg-opacity-[0.02] backdrop-blur-[2px]"
                                type="text"
                                name="Name"
            
                            />
                            <input
                                placeholder="Email"
                                required
                                id="email"
                                className="px-5 py-2 w-[350px] border-[#27272A] border-[1.5px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#ffffff] focus:outline focus:outline-offset-[3px] bg-white bg-opacity-[0.02] backdrop-blur-[2px]"
                                type="email"
                                name="Email"
                                
                            />
                            <input
                                placeholder="Mobile No."
                                id="mobileNo"
                                className="px-5 py-2 w-[350px] border-[#27272A] border-[1.5px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#ffffff] focus:outline focus:outline-offset-[3px] bg-white bg-opacity-[0.02] backdrop-blur-[2px]"
                                type="text"
                                name="Phoneno"
                                
                            />
                            <textarea
                                placeholder="Feedback"
                                required
                                id="message"
                                name="Message"
                                rows="5"
                                className="px-5 py-2 w-[350px] border-[#27272A] border-[1px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#ffffff] focus:outline focus:outline-offset-[3px] bg-white bg-opacity-[0.02] backdrop-blur-[2px]"
                                
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-[#28282a97] px-5 py-2 w-[350px] border-[#343437] border-[1px] rounded-md text-white focus:outline-[2px] focus:outline-[#ffffff] focus:outline focus:outline-offset-[3px] hover:bg-[#27272A] hover:border-[#39393c] transition duration-300 ease-in-out"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                
        </div>
    );
};

export default FeedbackForm;
