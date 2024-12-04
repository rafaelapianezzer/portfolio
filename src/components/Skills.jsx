import { v4 as uuidv4 } from 'uuid';
import redux from '../assets/icons8-redux-50.png';
import tailwind from '../assets/icons8-tailwind-css-100 (1).png';
import api from '../assets/api.png';
import ts from '../assets/typescript.png';

export const Skills = () => {

    const skillsList = [
        {
            name: "HTML5",
            icon: <i className="fa-brands fa-html5"></i>
        },
        {
            name: "CSS3",
            icon: <i className="fa-brands fa-css3-alt"></i>
        },
        {
            name: "Figma",
            icon: <i className="fa-brands fa-figma"></i>
        },
        {
            name: "JavaScript",
            icon: <i className="fa-brands fa-js"></i>
        },
        {
            name: "React.JS",
            icon: <i className="fa-brands fa-react"></i>
        },
        {
            name: "StyledComponents",
            icon: <i className="fa-solid fa-paintbrush"></i>
        },
        {
            name: "SASS",
            icon: <i class="fa-brands fa-sass"></i>
        },
        {
            name: "Bootstrap",
            icon: <i className="fa-brands fa-bootstrap"></i>
        },
        {
            name: "Tailwind CSS",
            icon: <img src={tailwind} className='h-8' />
        },
        {
            name: "React Hooks",
            icon: <i className="fa-solid fa-code"></i>
        },
        {
            name: "Redux",
            icon: <img src={redux} className='h-7' />
        },
        {
            name: "API RESTful",
            icon: <img src={api} className='h-8' />
        },
        {
            name: "Git",
            icon: <i className="fa-brands fa-git-alt"></i>
        },
        {
            name: "TypeScript",
            icon: <img src={ts} className='h-7' />
        },
        {
            name: "Python",
            icon: <i className="fa-brands fa-python"></i>
        },
        {
            name: "Node.JS",
            icon: <i className="fa-brands fa-node-js"></i>
        },
    ].map(skill => ({
        id: uuidv4(),
        ...skill
    }));

    return (
        <div className="flex flex-col items-center w-full lg:w-10/12 xl:w-8/12 mx-auto p-4">
            <h4 className="p-4 font-sora font-bold text-center text-2xl m-10">Habilidades</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-10/12">
                {skillsList.map((skill) => (
                    <div 
                    key={skill.id} 
                    className="flex flex-col items-center justify-center text-center h-28 w-full p-4 border-purple-100 border-[2px] rounded shadow-lg 
                             hover:border-purple-200 transition-all duration-300 dark:bg-purple-100 
                             dark:hover:bg-purple-200"
                  >
                    <div className="text-[28px]">{skill.icon}</div>
                    <p className="mt-2 text-neutral-900 font-light text-[12px] font-sora ">{skill.name}</p>
                  </div>
                  
                ))}
            </div>
        </div>







    )
}
