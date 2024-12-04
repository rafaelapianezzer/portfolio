export const Projects = () => {

    const projectsList = [
        {
            image: "https://via.placeholder.com/300", // Link para a imagem do projeto
            title: "Projeto 1",
            description: "Este é um projeto focado em React e Tailwind CSS.",
            technologies: ["React", "Tailwind CSS", "API REST"],
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
        <div className="flex flex-col items-center w-full lg:w-10/12 xl:w-8/12 mx-auto p-4">
            <h4 className="p-4 font-sora font-bold text-center text-2xl m-10">Projetos</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 w-10/12">
                {projectsList.map((project, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h5 className="font-bold text-xl mb-2">{project.title}</h5>
                            <p className="text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Repositório
                                </a>
                                <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Deploy
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
