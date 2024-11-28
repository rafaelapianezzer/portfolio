export const Header = () => {
    return (
        <div className='flex flex-col items-center  py-12 px-6 sm:px-16 lg:px-120 sm:py-40 lg:py-28  h-screen'>
            <div className='md:mx-auto max-w-4xl '>
                <div className='text-left md:text-center lg:text-center '>

                    <h1 className='font-display text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 '>
                        Olá, eu sou a <span className="block sm:inline"> Rafaela Pianezzer</span>
                    </h1>
                    <h2 className='font-display text-2xl md:text-3xl font-bold text-purple-900 dark:text-purple-300'>
                        Desenvolvedora Full Stack
                    </h2>
                    <div className='flex flex-col mx-auto md:items-center'>
                        <p className='font-sora mt-6 text-sm md:text-lg leading-4 text-neutral-600 dark:text-neutral-100 w-9/12'>
                            Seja bem-vindo ao meu portfólio!
                        </p>
                        <p className='font-sora mt-6 text-sm md:text-base leading-8 text-neutral-600 dark:text-neutral-100  md:w-8/12 '>
                            Sou uma desenvolvedora Full Stack apaixonada por tecnologia e constantemente em busca de novos desafios. Fique à vontade para explorar e conhecer mais sobre meu trabalho e minhas áreas de interesse.
                        </p>
                    </div>
                    <div className='flex justify-between flex-col '>
                        <div className='mt-10 flex md:justify-center items-center gap-3 sm:gap-6 font-body'>
                            <a href='https://github.com/rafaelapianezzer' target="_blank" className='bg-purple-600 rounded-[5px] px-3 py-2'>  <i className="fa-brands fa-github text-2xl text-purple-50"></i></a>
                            <a href='https://br.linkedin.com/in/rafaela-pianezzer-970250150' target="_blank" className='bg-purple-600 rounded-[5px] px-3 py-2'>  <i className="fa-brands fa-linkedin text-2xl text-purple-50"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll Icon */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-neutral-900 dark:text-neutral-50 text-lg mb-2">Scroll</span>
                <div className="animate-bounce">
                    <i className="fa-solid fa-chevron-down text-2xl text-purple-900 dark:text-purple-300"></i>
                </div>
            </div>
        </div>
    )
}