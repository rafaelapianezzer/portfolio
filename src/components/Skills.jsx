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
            icon: <i className="fa-brands fa-sass"></i>
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
            icon: <img src={ts} className='h-8 pb-[4px]' />
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
        <div className="flex flex-col relative z-20 items-center mx-auto  my-20 ">
            <h4 id="skills" className="font-sora text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-neutral-50 py-20">Habilidades</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-10/12 xl:w-8/12 relative z-20">
                {skillsList.map((skill) => (
                    <div
                        key={skill.id}
                        className="flex flex-col items-center justify-center text-center  h-28 w-full p-4 rounded  relative z-20 shadow-lg
                        bg-purple-200
                        border-purple-200 border-[2px]
                        dark:hover:bg-purple-200"
                    >
                        <div className="text-[28px]">{skill.icon}</div>
                        <p className="mt-2 text-red font-light text-[12px] font-sora ">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
