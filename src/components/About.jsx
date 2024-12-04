import foto from '../assets/foto.jpeg';

export const About = () => {
    return (
        <div className='bg-neutral-50 dark:bg-neutral-900'>
            <h4 className="p-4 font-sora font-bold text-center text-2xl m-10">Sobre</h4>
            <div className="flex w-full sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-6/12 flex-col md:flex-row lg:flex-row xlg:flex-row mx-auto items-center justify-beteen ">
                <div className='flex flex-col justify-center items-center text-justify gap-8'>
                    <div className='w-10/12'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officia eos atque fugit nisi modi quaerat ea, ullam eum omnis error autem possimus explicabo neque officiis qui magni ratione nihil!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at quos, consequatur repudiandae recusandae quidem non magnam accusantium maiores officiis et quam architecto distinctio, ducimus eveniet saepe magni quasi voluptates.</p>
                    </div>
                </div>
                <div className='relative my-8'>

                    <img src={foto} className="rounded-md object-contain max-w-xs border-t-[28px] border-r-[28px] border-purple-400 shadow-lg" alt="foto Rafaela" />
                </div>

            </div>
        </div>

    )
}


