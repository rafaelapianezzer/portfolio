import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-between p-4 px-6 sm:px-16 lg:px-120 mb-10">
           <div className='flex flex-row justify-between w-full items-center py-3'>
           <h4 className="text-neutral-900 text-2xl  dark:text-neutral-50">
                <span className="text-purple-900 dark:text-bg-purple-300">{"<"}</span>r.pianezzer
                <span className="text-purple-900 dark:text-bg-purple-300">{"/>"}</span>
            </h4>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="sm:hidden rounded-full bg-purple-200 w-10 h-10 flex justify-center items-center"
                >
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-neutral-900 text-lg`}></i>
                </button>
            </div>

           </div>
            <div className="hidden sm:flex space-x-8">
                <a href="#" className="text-neutral-900 hover:text-purple-900">Home</a>
                <a href="#" className="text-neutral-900 hover:text-purple-900">Sobre</a>
                <a href="#" className="text-neutral-900 hover:text-purple-900">Habilidades</a>
                <a href="#" className="text-neutral-900 hover:text-purple-900">Projetos</a>
                <a href="#" className="text-neutral-900 hover:text-purple-900">Contato</a>
                <ThemeToggle />
            </div>
            <div
                className={`fixed top-0 right-0 h-screen w-screen bg-neutral-50 dark:bg-neutral-900 z-10 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6 flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                        <h4 className="text-neutral-900 text-lg text-[28px] dark:text-neutral-50">
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

                    {/* Conteúdo do menu */}
                    <div className="flex flex-col gap-8">
                        <ul className="space-y-4">
                            <li className="text-neutral-900 text-xl hover:text-purple-900 dark:text-neutral-50">Home</li>
                            <li className="text-neutral-900 text-xl hover:text-purple-900 dark:text-neutral-50">Sobre</li>
                            <li className="text-neutral-900 text-xl hover:text-purple-900 dark:text-neutral-50">Habilidades</li>
                            <li className="text-neutral-900 text-xl hover:text-purple-900 dark:text-neutral-50">Projetos</li>
                            <li className="text-neutral-900 text-xl hover:text-purple-900 dark:text-neutral-50">Contato</li>
                        </ul>
                    </div>
                    <div className="flex gap-4 border-t pt-4 items-center justify-between">
                        <div className='flex gap-5'>
                            <i className="fa-brands fa-github text-2xl dark:text-neutral-50"></i>
                            <i className="fa-brands fa-linkedin text-2xl dark:text-neutral-50"></i>
                        </div>
                        <div>
                            <ThemeToggle />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
