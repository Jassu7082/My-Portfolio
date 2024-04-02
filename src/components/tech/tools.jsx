import vscode from "../../assets/vscode.webp"
import git from "../../assets/git.webp"
import figma from "../../assets/figma.webp"
import postman from "../../assets/postman.webp"
import hyper from "../../assets/hyper.webp"
import blender from "../../assets/Blender.png"
const tools = [
    { name: 'Vscode', imageSrc: vscode, altText: 'Visual Studio Code', color: '#007ACC' },
    { name: 'Git', imageSrc: git, altText: 'Git', color: '#F05032' },
    { name: 'Figma', imageSrc: figma, altText: 'Figma', color: '#F24E1E' },
    { name: 'Postman', imageSrc: postman, altText: 'Postman', color: '#FF6C37' },
    { name: 'Hyper', imageSrc: hyper, altText: 'Hyper', color: '#000000' },
    { name: 'Blender', imageSrc: blender, altText: 'Blender', color: '#FFFFFF' }
];
const ToolCard = ({ name, imageSrc, altText, color }) => {
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
                    {/* <div>{name}</div> */}
                </div>
            </div>
        </div>
    );
  };

  const ToolContainer = () => {
    return (
      <div  className="flex flex-col items-center">
        <div style={{ opacity: 0.975698, transform: 'none' }}>
          <div className="flex w-fit justify-center bg-[#ffffff] bg-opacity-[0.16] py-2 px-6 rounded-3xl hover:border-zinc-500 transition-all duration-300 ease-in-out my-[80px] border-[1.5px] border-[#515151] backdrop-filter backdrop-blur-2xl">
            <div className="flex justify-center items-center gap-2">
              <div className="text-[13px] sm:text-[17px] font-semibold">Tools</div>
            </div>
          </div>
        </div>
        <div className="sm:grid flex flex-wrap justify-center items-center gap-4 sm:grid-rows-2 sm:grid-cols-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    );
  };
  export default ToolContainer;