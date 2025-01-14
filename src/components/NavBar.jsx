import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <>
            <div className="flex items-center justify-between p-4 px-6 sm:px-16 lg:px-120 relative z-20">
                <div className="flex flex-row justify-between w-full items-center py-3">
                    <h4 className="font-sora text-neutral-900 text-lg dark:text-neutral-50">
                        <span className="text-purple-900 dark:text-purple-300">{"<"}</span>r.pianezzer
                        <span className="text-purple-900 dark:text-purple-300">{"/>"}</span>
                    </h4>
                    <div className="flex">
                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="sm:flex md:flex lg:hidden xl:hidden rounded-full bg-purple-200 w-10 h-10 flex justify-center items-center"
                        >
                            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-neutral-900 text-lg`}></i>
                        </button>
                    </div>
                </div>
                <div className="hidden lg:flex space-x-8 items-center">
                    <a
                        href="#header"
                        className="text-neutral-900 hover:text-purple-600 dark:text-neutral-50 dark:hover:text-purple-300 
                            hover:underline transition duration-300 ease-in-out font-sora font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-neutral-900 hover:text-purple-600 dark:text-neutral-50 dark:hover:text-purple-300 
                            hover:underline transition duration-300 ease-in-out font-sora font-medium"
                    >
                        Sobre
                    </a>
                    <a
                        href="#skills"
                        className="text-neutral-900 hover:text-purple-600 dark:text-neutral-50 dark:hover:text-purple-300 
                            hover:underline transition duration-500 ease-in-out font-sora font-medium"
                    >
                        Habilidades
                    </a>
                    <a
                        href="#projects"
                        className="text-neutral-900 hover:text-purple-600 dark:text-neutral-50 dark:hover:text-purple-300 
                            hover:underline transition duration-500 ease-in-out font-sora font-medium"
                    >
                        Projetos
                    </a>
                    <a
                        href="#contact"
                        className="text-neutral-900 hover:text-purple-600 dark:text-neutral-50 dark:hover:text-purple-300 
                            hover:underline transition duration-500 ease-in-out font-sora font-medium"
                    >
                        Contato
                    </a>
                    <div className="w-8">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out fixed z-30"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
            <div
                className={`fixed top-0 right-0 h-screen w-screen max-w-md bg-neutral-50 dark:bg-neutral-900 z-40 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6 flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                        <h4 className="font-sora text-neutral-900 text-lg text-[28px] dark:text-neutral-50">
                            <span className="text-purple-900 dark:text-purple-600">{"<"}</span>r.pianezzer
                            <span className="text-purple-900 dark:text-purple-600">{"/>"}</span>
                        </h4>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-full bg-purple-200 w-10 h-10 flex justify-center items-center"
                        >
                            <i className="fa-solid fa-xmark text-neutral-900 text-lg"></i>
                        </button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#home"
                                    className="text-neutral-900 text-xl hover:text-purple-900 dark:text-neutral-50 dark:hover:text-purple-300 transition duration-500 ease-in-out" onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-neutral-900 text-xl hover:text-purple-900 dark:text-neutral-50 transition duration-500 ease-in-out" onClick={() => setIsOpen(false)}
                                >
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="text-neutral-900 text-xl hover:text-purple-900 dark:text-neutral-50 transition duration-500 ease-in-out" onClick={() => setIsOpen(false)}
                                >
                                    Habilidades
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-neutral-900 text-xl hover:text-purple-900 dark:text-neutral-50 transition duration-500 ease-in-out" onClick={() => setIsOpen(false)}
                                >
                                    Projetos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-neutral-900 text-xl hover:text-purple-900 dark:text-neutral-50 transition duration-500 ease-in-out" onClick={() => setIsOpen(false)}
                                >
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-4 border-t pt-4 items-center justify-between">
                        <div className="flex gap-5">
                            <a
                                href="https://br.linkedin.com/in/rafaela-pianezzer-970250150"
                                target="_blank"
                            >
                                <i className="fa-brands fa-linkedin text-2xl dark:text-neutral-50"></i>
                            </a>
                            <a
                                href="https://github.com/rafaelapianezzer"
                                target="_blank"
                            >
                                <i className="fa-brands fa-github text-2xl dark:text-neutral-50"></i>
                            </a>
                        </div>
                        <div>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
