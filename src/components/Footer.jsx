import { useState, useEffect } from "react";
import linkedin from '../assets/BsLinkedin.svg';
import gitHub from '../assets/BsGithub.svg';

export const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se a posição de rolagem é maior que 300px
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center w-full lg:w-9/12 xl:w-7/12 mx-auto p-4 relative z-20">
        <h4 className=" text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-neutral-50 p-12
        ">Contato</h4>
        <p className="text-center text-neutral-600 dark:text-neutral-300">Sinta-se à vontade para entrar em contato por e-mail ou através das redes sociais.</p>
        <div className="flex gap-6 justify-center items-center py-20">
          <a
            href="https://github.com/rafaelapianezzer"
            target="_blank"
            className="bg-neutral-900 dark:bg-neutral-50 rounded-[5px] px-3 py-1"
          >
            <i class="fa-regular fa-envelope text-2xl text-neutral-50 dark:text-neutral-900"></i>
          </a>
          <a
            href="https://github.com/rafaelapianezzer"
            target="_blank"
            className="bg-neutral-900 dark:bg-neutral-50 rounded-[5px] px-3 py-1"
          >
            <i className="fa-brands fa-github text-2xl text-neutral-50 dark:text-neutral-900"></i>
          </a>
          <a
            href="https://br.linkedin.com/in/rafaela-pianezzer-970250150"
            target="_blank"
            className="bg-neutral-900 dark:bg-neutral-50 rounded-[5px] px-3 py-1"
          >
            <i className="fa-brands fa-linkedin text-2xl text-neutral-50 dark:text-neutral-900"></i>
          </a>
        </div>
      </div>
      {showButton && (
        <button
          className="fixed right-4 md:right-12 bottom-20 text-neutral-100 bg-purple-500 py-3 px-4  md:py-4 md:px-5 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out bounce-custom z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      )}
      <div className="max-w-screen-xl mx-auto text-center mt-6 lg:mt-10 text-neutral-600 dark:text-neutral-300 p-6">
        <p className="text-2xs lg:text-xs">© 2024 | Desenvolvido por Rafaela Pianezzer 💜</p>
      </div>
    </div>
  );
};



<a
  href="https://br.linkedin.com/in/rafaela-pianezzer-970250150"
  target="_blank"
  className="bg-purple-600 rounded-[5px] px-3 py-1"
>
  <i className="fa-brands fa-linkedin text-2xl text-purple-50"></i>
</a>