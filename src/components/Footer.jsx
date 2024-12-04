export const Footer = () => {
    return (
        <div>
        <div className="flex  items-center justify-center flex-col gap-10 px-8 py-12">
            <h4 className="font-sora font-bold text-2xl">Contato</h4>
            <p className='text-center'>Sinta-se à vontade para entrar em contato por e-mail ou através das redes sociais.</p>
          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="flex gap-6">
              <div>
                <a href="mailto:rafaelapianezzer@outlook.com">
                  <i className="fas fa-envelope text-2xl"></i>
                </a>
              </div>
              <div>
                <a href="https://github.com/seuperfil" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-github text-2xl"></i>
                </a>
              </div>
              <div>
                <a href="https://linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
            <button className="animate-bounce mt-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-xs">Voltar ao topo</span>
              <i className="fa-solid fa-chevron-up dark:text-purple-300 ml-2"></i>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <p className='p-12'>© 2024 | Rafaela Pianezzer</p>
        </div>
      </div>
    )
}