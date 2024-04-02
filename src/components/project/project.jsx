import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"
import project4 from "../../assets/project4.png"
import project5 from "../../assets/project5.png"
import Card from "./projectcard.jsx"
const callouts = [
  {
    name: 'My Portfolio Website',
    description: "Developed a responsive portfolio website using HTML, CSS, and JavaScript to showcase my projects, skills, and personal information. The website features a clean and modern design, allowing visitors to easily navigate and explore my work. I present my projects, highlight my skills, and provide insights into my background and experiences",
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
    <div id="Projects" className="flex m-10  items-center">
      <div >
        {callouts.map((project, index) => (
          <Card
            key={index}
            title={project.name}
            desp={project.description}
            github={project.href}
            imageSrc={project.imageSrc}
          />
        ))}

      </div>
    </div>
  );
};

export default Project;