import foto from '../assets/foto.jpeg';

export const About = () => {
    return (
        <div>
            <h4 className="font-display text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-neutral-50">Sobre</h4>
            <div className="flex flex-col lg:flex-row items-center justify-center pt-12 pb-20 gap-6">
                <div className='max-w-xl flex items-center justify-center'>
                    <div className='w-10/12  flex flex-col text-justify font-inter text-base font-normal tracking-[0.25px] text-neutral-800 pb-8'>
                        <p className='font-body text-sm xl:text-lg mb-3 text-neutral-600 dark:text-neutral-300'>
                            Depois de anos atuando como advogada, decidi direcionar minha carreira para a área da tecnologia, um interesse que sempre esteve presente.
                        </p>
                        <p className='font-body text-sm xl:text-lg mb-3 text-neutral-600 dark:text-neutral-300'>
                            Hoje, estou cursando Análise e Desenvolvimento de Sistemas e concluí o curso de Desenvolvimento Web Full Stack, onde aprendi a desenvolver aplicações completas.
                        </p>
                        <p className='font-body text-sm xl:text-lg mb-3 text-neutral-600 dark:text-neutral-300'>
                            Minha jornada é movida pela vontade de aprender e crescer continuamente, sempre conectando criatividade com tecnologia.
                        </p>
                    </div>
                </div>
                <div className="relative w-64 h-80">
                    <div className="absolute top-0 left-6 w-full h-full bg-purple-300 rounded-lg"></div>
                    <img
                        src={foto}
                        alt="Descrição"
                        className="absolute -top-4 left-0 w-full h-full object-cover rounded-lg shadow-lg scale-100"
                    />
                </div>


            </div>
        </div>

    )
}


