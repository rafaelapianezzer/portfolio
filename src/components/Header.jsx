import { Navbar } from "./NavBar";
import { ScrollButton } from "./ScroollButton";

export const Header = () => {
    return (
        <div>
            <Navbar />
            <div className="relative z-20 flex flex-col items-center justify-between py-12 px-6 sm:px-16 lg:px-120 sm:py-40 lg:py-28 2xl:py-48">
                <div className="md:mx-auto max-w-4xl flex">
                    <div className="text-left md:text-center lg:text-center flex flex-col">
                        <h1 id="header" className="font-sora text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                            Olá, eu sou a <span className="block sm:inline">Rafaela Pianezzer</span>
                        </h1>
                        <h2 className="font-sora text-2xl md:text-3xl font-bold text-purple-900 dark:text-purple-300">
                            Desenvolvedora Full Stack
                        </h2>
                        <div className="flex flex-col mx-auto md:items-center mt-8">
                            <p className="font-sora mt-6 text-sm md:text-lg leading-4 text-neutral-600 dark:text-neutral-100 w-9/12">
                                Seja bem-vindo ao meu portfólio!
                            </p>
                            <p className="font-sora mt-6 md:text-base leading-8 text-neutral-600 dark:text-neutral-100 md:w-8/12">
                                Sou uma desenvolvedora Full Stack apaixonada por tecnologia e constantemente em busca de novos desafios. Fique à vontade para explorar e conhecer mais sobre meu trabalho e minhas áreas de interesse.
                            </p>
                        </div>
                        <div className="mt-10 flex md:justify-center items-center gap-3 sm:gap-6 font-body">
                            <a
                                href="https://github.com/rafaelapianezzer"
                                target="_blank"
                                className="bg-purple-600 rounded-[5px] px-3 py-1"
                            >
                                <i className="fa-brands fa-github text-2xl text-purple-50"></i>
                            </a>
                            <a
                                href="https://br.linkedin.com/in/rafaela-pianezzer-970250150"
                                target="_blank"
                                className="bg-purple-600 rounded-[5px] px-3 py-1"
                            >
                                <i className="fa-brands fa-linkedin text-2xl text-purple-50"></i>
                            </a>
                            <a href={`${process.env.PUBLIC_URL}/curriculo.pdf`}
                                target="_blank" rel="noopener noreferrer"
                                className="bg-purple-600 rounded-[5px] px-3 py-2 font-sora text-purple-50"
                            >
                                Currículo
                            </a>
                        </div>
                    </div>
                </div>
                <ScrollButton />
            </div>

        </div>
    );
};
