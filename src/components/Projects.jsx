import mfit from '../assets/mfit-image.png';
import redux from '../assets/icons8-redux-50.png';
import tailwind from '../assets/icons8-tailwind-css-100 (1).png';

export const Projects = () => {

    const projectsList = [
        {
            image: mfit,
            title: "MFIT Anamnese",
            description: "Este é um projeto focado em React e Tailwind CSS.",
            technologies: [
                <div className='flex gap-2 items-center'>
                    <i className="fa-brands fa-html5 text-2xl"></i>
                    <i className="fa-brands fa-css3-alt text-2xl"></i>
                    <i className="fa-brands fa-react text-2xl"></i>
                    <img src={tailwind} className='h-7' />
                    <img src={redux} className='h-6' />
                </div>
            ],
            repoLink: "https://github.com/seuusuario/projeto1",
            deployLink: "https://seuprojeto1.vercel.app"
        },
        {
            image: "https://via.placeholder.com/300",
            title: "Projeto 2",
            description: "Um projeto simples usando HTML, CSS e JavaScript.",
            technologies: ["HTML", "CSS", "JavaScript"],
            repoLink: "https://github.com/seuusuario/projeto2",
            deployLink: "https://seuprojeto2.vercel.app"
        },
        {
            image: "https://via.placeholder.com/300",
            title: "Projeto 2",
            description: "Um projeto simples usando HTML, CSS e JavaScript.",
            technologies: ["HTML", "CSS", "JavaScript"],
            repoLink: "https://github.com/seuusuario/projeto2",
            deployLink: "https://seuprojeto2.vercel.app"
        },
        {
            image: "https://via.placeholder.com/300",
            title: "Projeto 2",
            description: "Um projeto simples usando HTML, CSS e JavaScript.",
            technologies: ["HTML", "CSS", "JavaScript"],
            repoLink: "https://github.com/seuusuario/projeto2",
            deployLink: "https://seuprojeto2.vercel.app"
        }
    ];

    return (
        <div className="flex flex-col items-center w-full lg:w-10/12 xl:w-8/12 mx-auto p-4 relative z-20">
            <h4 className="font-display text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-neutral-50 py-20">Projetos</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 w-10/12 ">
                {projectsList.map((project, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-neutral-50">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-display text-lg md:text-2xl text-neutral-900  font-bold my-2">{project.title}</h3>
                            <p className="font-body text-xs md:text-sm text-neutral-600 ">{project.description}</p>
                            <div className="flex flex-wrap gap-2 my-5">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="mr-3 text-xl text-neutral-700 ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex ">
                                <button className="flex items-center mr-4 rounded-md p-2  text-sm font-sora text-neutral-50 bg-purple-500 hover:text-neutral-50 hover:bg-purple-600 transition duration-500 ease-in-out">
                                    <a 
                                    href={project.repoLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" >
                                        Repositório
                                    </a>
                                </button>
                                <button className="flex items-center text-sm font-inter font-semibold text-neutral-500 bg-transparent">
                                    <a
                                        href={project.deployLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-[2px] border-purple-500 hover:text-neutral-50 hover:bg-purple-600 rounded-md p-2 px-4 transition duration-500 ease-in-out"
                                    >
                                        Deploy
                                    </a>
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
