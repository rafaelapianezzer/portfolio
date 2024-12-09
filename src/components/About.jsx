import foto from '../assets/foto.jpeg';

export const About = () => {
    return (
        <div className='bg-purple-50'>
            <h4 className="pt-24 pb-12 font-sora font-bold text-center text-2xl">Sobre</h4>
            <div className="flex w-full sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-6/12 flex-col md:flex-row lg:flex-row xlg:flex-row mx-auto items-center justify-beteen ">
                <div className='flex flex-col justify-center items-center text-justify gap-8'>
                    <div className='w-10/12 gap-8 flex flex-col font-inter text-base not-italic font-normal leading-6 tracking-[0.25px] text-neutral-800 '>
                        <p className=''>
                            Depois de anos atuando como advogada, decidi direcionar minha carreira para a área da tecnologia, um interesse que sempre esteve presente.
                        </p>
                        <p>
                            Hoje, estou cursando Análise e Desenvolvimento de Sistemas e concluí o curso de Desenvolvimento Web Full Stack, onde aprendi a desenvolver aplicações completas.
                        </p>
                        <p>
                            Minha jornada é movida pela vontade de aprender e crescer continuamente, sempre conectando criatividade com tecnologia.
                        </p>

                    </div>
                </div>
                <div className='relative my-8'>

                    <img src={foto} className="rounded-md object-contain max-w-xs border-t-[28px] border-r-[28px] border-purple-400 shadow-lg" alt="foto Rafaela" />
                </div>

            </div>
        </div>

    )
}


