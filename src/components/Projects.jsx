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
            technologies: [
                <ul className='flex gap-2 items-center text-xs'>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>HTML3</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>CSS5</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>Tailwind</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>React</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>Redux</li>
                </ul>
            ],
            repoLink: "https://github.com/rafaelapianezzer/mfit_anamnese",
            deployLink: "https://mfit-anamnese.vercel.app/"
        },
        {
            image: lets,
            title: "Let's Train",
            description: "Cronômetro HIIT, que permite ao usuário personalizar o tempo de treino, descanso, número de séries e números de ciclos.",
            technologies: [
                <ul className='flex gap-2 items-center text-xs'>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>HTML3</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>CSS5</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>Bootstrap</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>Sass</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>React</li>
                </ul>
            ],
            repoLink: "https://github.com/rafaelapianezzer/lets_train",
            deployLink: "https://lets-train.vercel.app/"
        },
        {
            image: burguer,
            title: "Hamburgueria Gigabyte",
            description: "Projeto com implementação de API para exibir a lista de produtos. O carrinho de compras foi desenvolvido para adicionar e remover itens, calcular os valores totais e persistir os dados no localStorage.",
            technologies: [
                <ul className='flex gap-2 items-center text-xs'>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>HTML3</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>CSS5</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>Sass</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>React</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>API RESTful</li>
                </ul>
            ],
            repoLink: "https://github.com/rafaelapianezzer/hamburgueria-gigabyte",
            deployLink: "https://hamburgueria-gigabyte.vercel.app"
        },
        {
            image: code,
            title: "API de controle de tarefas",
            description: "Desenvolvimento de API que gerencia tarefas e categorias, permitindo criar, ler, atualizar e excluir registros. Conta com validação e tipagem de dados e utiliza um banco de dados com migrações automatizadas.",
            technologies: [
                <ul className='flex gap-2 items-center text-xs'>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>PostgreSQL</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>Express</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>Prisma</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>API RESTful</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>Helmet</li>
                    <li className=' rounded-full bg-slate-200 py-1 px-2 font-semibold whitespace-nowrap text-slate-500'>Jest</li>
                </ul>
            ],
            repoLink: "https://github.com/Kenzie-Academy-Brasil-Developers/m5-template-entrega1-rafaelapianezzer",
        }
    ];

    return (
        <div className="relative z-20 flex items-center mx-auto w-full lg:w-10/12 xl:w-8/12 my-20 p-4 px-8 ">
            <div className='flex flex-col items-center justify-center mx-auto'>
                <h4 id="projects" className="font-sora text-3xl md:text-4xl font-bold pb-6 text-center text-neutral-900 dark:text-neutral-50">Projetos</h4>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
                    {projectsList.map((project, index) => (
                        <div className='flex '>
                            <div key={index} className=" max-w-lg shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden rounded-lg w-full ">
                                <div className=''>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className=''
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-sora text-lg md:text-2xl text-neutral-900 dark:text-neutral-50 font-bold my-2 h-10">{project.title}</h3>
                                    <p className="text-xs md:text-sm text-left text-neutral-600 dark:text-neutral-50 h-14">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 my-5">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx}>{tech}</span>
                                        ))}
                                    </div>
                                    <div className="flex">
                                        <button className="flex items-center justify-center mr-4 rounded-md p-2 text-sm font-sora text-neutral-50 bg-purple-500 hover:text-neutral-50 hover:bg-purple-600 transition duration-500 ease-in-out">
                                            <a
                                                href={project.repoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full h-full flex items-center justify-center"
                                            >
                                                Repositório
                                            </a>
                                        </button>
                                        {project.deployLink && (
                                            <button className="flex items-center justify-center rounded-md p-2  text-sm font-sora text-neutral-50 bg-purple-500 hover:bg-purple-600 transition duration-500 ease-in-out">
                                                <a
                                                    href={project.deployLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full h-full flex items-center justify-center"
                                                >
                                                    Deploy
                                                </a>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
