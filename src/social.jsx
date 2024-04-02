
import instagram from "./assets/instagram-color_icon.png";
import github from "./assets/github_icon.png";
import linkedin from "./assets/linkedin-color_icon.png";

const social = [
    { name: 'Instagram', imageSrc: instagram, altText: 'Instagram', color: '#C13584', url: 'https://www.instagram.com/jaswanth_jsr' },
    { name: 'GitHub', imageSrc: github, altText: 'GitHub', color: '#ffffff', url: 'https://github.com/jassu7082' },
    { name: 'LinkedIn', imageSrc: linkedin, altText: 'LinkedIn', color: '#0077B5', url: 'https://www.linkedin.com/in/settipi-jaswanth-reddy-2041b7256/' },
];

const SocialCard = ({ name, imageSrc, altText, color, url }) => {
    return (
        <div className="popover-container">
            <div className="hover-element">
                <div
                    className={`flex justify-center items-center flex-col sm:p-4 sm:w-[80px] sm:h-[80px] w-[70px] h-[70px] p-2 bg-zinc-900 sm:rounded-[15px] rounded-[12px] duration-500 ease-in-out cursor-pointer border-2 hover:-translate-y-2 border-gray-600`}
                    style={{
                        borderColor: null,
                        transition: 'box-shadow 0.3s ease',
                        boxShadow: `0 0 20px 5px transparent`, // Set initial box shadow to transparent
                    }}
                    onMouseEnter={(event) => {
                        event.currentTarget.style.boxShadow = `0 0 20px 5px ${color}`; // Apply box shadow on hover
                    }}
                    onMouseLeave={(event) => {
                        event.currentTarget.style.boxShadow = `0 0 20px 5px transparent`; // Remove box shadow on hover out
                    }}
                >
                   <a href={url} target="_blank">
                    <img
                        alt={altText}
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                        className="duration-500 ease-in-out hover:scale-105"
                        src={imageSrc}
                    />
                    </a>
                    {/* <div>{name}</div> */}
                </div>
            </div>
        </div>
    );
};

const SocialContainer = () => {
    return (
        <div className="flex flex-col items-center">
            <div style={{ opacity: 0.975698, transform: 'none' }}>
                <div className="flex w-fit justify-center bg-[#ffffff] bg-opacity-[0.16] py-2 px-6 rounded-3xl hover:border-zinc-500 transition-all duration-300 ease-in-out my-[80px] border-[1.5px] border-[#515151] backdrop-filter backdrop-blur-2xl">
                    <div className="flex justify-center items-center gap-2">
                        <div className="text-[13px] sm:text-[17px] font-semibold">Socials</div>
                    </div>
                </div>
            </div>
            <div className="sm:grid flex flex-wrap justify-center items-center gap-4 sm:grid-rows-1 sm:grid-cols-3">
                {social.map((social, index) => (
                    <SocialCard key={index} {...social} />
                ))}
            </div>
            <div className="flex flex-row gap-x-3 mt-10">
                <div style={{ opacity: 1, transform: 'none' }}>
                    <a target="_blank" href="https://github.com/jassu7082">
                        <button className="bg-[#28282a97] gap-x-2 px-5 py-2 sm:w-[150px] w-[130px] border-[#343437] border-[1px] rounded-md text-white focus:outline-[2px] focus:outline-[#27272A] focus:outline focus:outline-offset-[3px] hover:bg-[#27272A] hover:border-[#39393c] transition duration-300 ease-in-out flex flex-row justify-center items-center">
                            <span>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .25a.75.75 0 0 1 .673.418l3.058 6.197 6.839.994a.75.75 0 0 1 .415 1.279l-4.948 4.823 1.168 6.811a.751.751 0 0 1-1.088.791L12 18.347l-6.117 3.216a.75.75 0 0 1-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 0 1 .416-1.28l6.838-.993L11.328.668A.75.75 0 0 1 12 .25Zm0 2.445L9.44 7.882a.75.75 0 0 1-.565.41l-5.725.832 4.143 4.038a.748.748 0 0 1 .215.664l-.978 5.702 5.121-2.692a.75.75 0 0 1 .698 0l5.12 2.692-.977-5.702a.748.748 0 0 1 .215-.664l4.143-4.038-5.725-.831a.75.75 0 0 1-.565-.41L12 2.694Z"></path>
                                </svg>
                            </span>
                            <span>Github</span>
                        </button>
                    </a>
                </div>
                <div className="relative flex" style={{ opacity: 1, transform: 'none' }}>
                    <a target="_blank" href="https://drive.google.com/file/d/1lrG13C-OnX7-BscdnZFtDAyLKEz3RdFp/view">
                        <button className="flex flex-row justify-center items-center gap-x-2 bg-[#28282a97] px-5 py-2 sm:w-[150px] w-[130px]  border-[#343437] border-[1px] rounded-md text-white focus:outline-[2px] focus:outline-[#27272A] focus:outline focus:outline-offset-[3px] hover:bg-[#27272A] hover:border-[#39393c] transition duration-300 ease-in-out">
                            <span>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path>
                                    <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
                                </svg>
                            </span>
                            <span>Resume</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialContainer;