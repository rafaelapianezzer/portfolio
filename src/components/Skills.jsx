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
            name: "Syntactically Awesome Stylesheets",
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
        <div className='flex flex-col items-center justify-center px-4 bg-neutral-50'>
            <h4 className='p-4'>Habilidades</h4>
            <div className="flex flex-wrap  justify-center mx-auto gap-4  lg:w-6/12 ">

                {skillsList.map((skill) => (
                    <div key={skill.id} className="flex flex-col  ">
                        {/* Container com borda para o ícone e o nome */}
                        <div className="flex flex-col items-center justify-center bg-neutral-50 border-purple-600 border  h-28 w-28">
                            <div className="text-[28px]">{skill.icon}</div>
                            <p className="mt-2 text-neutral-900 text-[10px] font-sora">{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}
