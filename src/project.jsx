import project1 from "./assets/project1.png"
import project2 from "./assets/project2.png"
import project3 from "./assets/project3.png"
import project4 from "./assets/project4.png"
import project5 from "./assets/project5.png"
const callouts = [
    {
      name: 'My Portfolio Website',
      description: "Developed a responsive portfolio website using HTML, CSS, and JavaScript to showcase my projects, skills, and personal information. The website features a clean and modern design, allowing visitors to easily navigate and explore my work. I present my projects, highlight my skills, and provide insights into my background and experiences" ,
      imageSrc: project1,
      imageAlt: 'My Portfolio Website',
      href: '#',
    },
    {
      name: 'Bus Tracker App',
      description: 'a web application built using Node.js, Express.js, Mongoose, and React.js.The main features of the application include tracking the bus, communicating with the school and parents, and getting attendance of bus drivers, with the basic functionality being tracking bus data and sending it to parents',
      imageSrc: project2,
      imageAlt: 'Bus Tracker App',
      href: 'https://github.com/Jassu7082/Bus_tracker',
    },
    {
      name: 'Simply Salad',
      description: 'Simply Salad is a subscription-based online food website built using Django. This user-friendly platform provides customers with a seamless and personalized experience when browsing and customizing their food orders. With secure user authentication.The integration of secure payment methods ensures a smooth and secure checkout process',
      imageSrc: project3,
      imageAlt: 'Simply Salad',
      href: 'https://github.com/jassu7082/HTT_Goofy_Thugs',
    },
    {
        name: 'Hermes',
        description: 'Developed an educational platform that provides a comprehensive learning experience for students. This platform offers a wide range of courses on various subjects, allowing students to clarify their doubts through interactive discussions. Additionally, teachers have the ability to conduct quizzes to assess student learning.',
        imageSrc: project4,
        imageAlt: 'Hermes',
        href: 'https://github.com/Jassu7082/Hermes-DevHeat-2022',
      },
      {
        name: 'Student Management System',
        description: 'Developed a comprehensive school management system using Django. This CRUD application allows administrators, teachers, and parents to efficiently manage various aspects of the school. With features like student enrollment, grade management.With a user-friendly interface, the system provides easy navigation',
        imageSrc: project5,
        imageAlt: 'Student Management System',
        href: 'https://github.com/Jassu7082/EduFlow',
      },
  ]
  
  const Project = () => {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h1 id="Projects" className="text-2xl text-center font-bold text-gray-900">Projects</h1>
  
            <div className="mt-6 space-y-12 gap-6  lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative border border-2 rounded-lg p-2 border-gray-500 dark:border-gray-900 ">
                  <div className="relative  h-80 w-full overflow-hidden rounded-lg  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75  sm:h-64 ">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                  <div className="flex  justify-center">
                    <button type="button" className="text-white  bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 w-[17%] py-2.5 mt-4">
                    <svg className="w-4  h-4 ml-[37%] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                      </svg>
                      Github
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Project;