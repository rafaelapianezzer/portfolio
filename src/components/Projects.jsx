import mfit from '../assets/mfit.png';
import lets from '../assets/lets.png';
import burguer from '../assets/burguer.png';
import code from '../assets/code.png';

export const Projects = () => {
    const projectsList = [
        {
            image: mfit,
            title: "MFIT Anamnese",
            description: "Aplicativo para personal trainer gerenciar alunos, criar e enviar formulários de anamnese, e acompanhar respostas de maneira otimizada.",
            technologies: ["HTML3", "CSS5", "Tailwind", "React", "Redux"],
            repoLink: "https://github.com/rafaelapianezzer/mfit_anamnese",
            deployLink: "https://mfit-anamnese.vercel.app/"
        },
        {
            image: lets,
            title: "Let's Train",
            description: "Cronômetro HIIT, que permite ao usuário personalizar o tempo de treino, descanso, número de séries e números de ciclos.",
            technologies: ["HTML3", "CSS5", "Bootstrap", "Sass", "React"],
            repoLink: "https://github.com/rafaelapianezzer/lets_train",
            deployLink: "https://lets-train.vercel.app/"
        },
        {
            image: burguer,
            title: "Hamburgueria Gigabyte",
            description: "Projeto com implementação de API para exibir a lista de produtos. O carrinho de compras foi desenvolvido para adicionar e remover itens, calcular os valores totais e persistir os dados no localStorage.",
            technologies: ["HTML3", "CSS5", "Sass", "React", "API RESTful"],
            repoLink: "https://github.com/rafaelapianezzer/hamburgueria-gigabyte",
            deployLink: "https://hamburgueria-gigabyte.vercel.app"
        },
        {
            image: code,
            title: "API de controle de tarefas",
            description: "Desenvolvimento de API que gerencia tarefas e categorias, permitindo criar, ler, atualizar e excluir registros. Conta com validação e tipagem de dados e utiliza um banco de dados com migrações automatizadas.",
            technologies: ["PostgreSQL", "Express", "Prisma", "API RESTful", "Helmet", "Jest"],
            repoLink: "https://github.com/Kenzie-Academy-Brasil-Developers/m5-template-entrega1-rafaelapianezzer",
        }
    ];

    return (
        <div className="relative z-20 flex items-center mx-auto w-full lg:w-10/12 xl:w-8/12 my-40 p-4 px-8 lg:px-0">
            <div className='flex flex-col items-center justify-center mx-auto'>
                <h4 id="projects" className="font-sora text-3xl md:text-4xl font-bold pb-6 text-center text-neutral-900 dark:text-neutral-50 mb-12">Projetos</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsList.map((project, index) => (
                        <div
                            key={index}
                            className="max-w-md h-auto flex flex-col justify-between shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden rounded-lg bg-white dark:bg-neutral-800"
                        >
                            <div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 flex flex-col justify-between flex-1 gap-y-3">
                                <h3 className="font-sora text-lg md:text-2xl text-neutral-900 dark:text-neutral-50 font-bold my-2">
                                    {project.title}
                                </h3>
                                <p className="text-xs md:text-sm text-left text-neutral-600 dark:text-neutral-50">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 my-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-50 dark:bg-neutral-600 px-2 py-1 rounded-md text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-6">
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center rounded-md p-2 text-sm font-sora text-neutral-50 bg-purple-500 hover:bg-purple-600 transition duration-500 ease-in-out w-full h-10"
                                    >
                                        Repositório
                                    </a>
                                    {project.deployLink && (
                                        <a
                                            href={project.deployLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center rounded-md p-2 text-sm font-sora text-neutral-50 bg-purple-500 hover:bg-purple-600 transition duration-500 ease-in-out w-full h-10"
                                        >
                                            Deploy
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
