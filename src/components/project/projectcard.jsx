import React from 'react';


const Card = ({ title, desp, github, imageSrc }) => {
  return (
    <div className="container flex flex-col xl:mb-10 items-stretch lg:flex-row-reverse lg:items-start  ">
      <div className="relative flex aspect-[4/3] justify-center overflow-hidden border border-gray-300 bg-white dark:bg-slate-800 lg:h-[650px] lg:w-2/3">
        <div className="ease-in-ou relative z-[5] h-full w-full transition-opacity duration-1000">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 836 694" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <g clipPath="url(#clip0_19_7072)">
              <g opacity="0.2" filter="url(#filter0_f_19_7072)">
                <rect x="95" y="73" width="779" height="635" fill="url(#paint0_linear_19_7072)"></rect>
              </g>
              <g clipPath="url(#clip1_19_7072)">
                <rect width="1503.24" height="961" transform="translate(134 211)" fill="#10151D"></rect>
              </g>
            </g>
          </svg> */}
                <img src={imageSrc} className=" lg:m-10 h-[85%] w-[100%]" />
        </div>
      </div>
      <div className="border border-gray-300 bg-white dark:bg-slate-800 p-6 mb-6 lg:translate-y-20 text-sm max-lg:border-t-0 md:p-12 lg:w-1/3 lg:border-r-0">
        <h2 className="title mb-5 text-[24px]/[29px] md:text-[32px]/[38px]" style={{ "--max-width-when-narrow": "15ch" }}>{title}</h2>
        <p style={{ "--max-width-when-narrow": "280px" }} className="rich-text mb-5">{desp}</p>
        <div className="mt-5 flex flex-wrap gap-x-8 ">
          <a href={github} target="_blank" rel="noopener noreferrer" className="border border-white text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
            </svg>
            Open in Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
