function Home() {
    return (
        <section id="home" className="bg-white dark:bg-gray-800 py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Olá, sou Antonio Juevan <br />
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                    <strong>Desenvolvedor Full Stack</strong> e <strong>Analista de Sistemas</strong> com uma sólida formação em Engenharia da Computação. Minha missão é criar soluções inovadoras e eficientes, desde interfaces responsivas no Front-End até APIs robustas no Back-End, sempre com foco em resultados que agreguem valor.
                    </p>
                    <div className="flex space-x-2">
                        <a href="#portfolio" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                            Veja meus projetos
                        </a>
                        <div className="hidden md:flex space-x-2 items-center">
                            <a href="https://www.linkedin.com/in/ajuevan/" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.059 20h-2.941v-8.705h2.941v8.705zm-1.471-9.978c-0.934 0-1.693-0.758-1.693-1.693 0-0.934 0.759-1.693 1.693-1.693s1.693 0.759 1.693 1.693c0 0.935-0.759 1.693-1.693 1.693zm10.53 9.978h-2.941v-4.705c0-1.122-0.023-2.565-1.561-2.565-1.562 0-1.8 1.219-1.8 2.482v4.788h-2.941v-8.705h2.823v1.188h0.04c0.393-0.744 1.352-1.561 2.78-1.561 2.973 0 3.53 1.959 3.53 4.506v4.572z" />
                                </svg>
                            </a>
                            <a href="https://github.com/Juevan" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.728-4.042-1.416-4.042-1.416-0.546-1.387-1.333-1.757-1.333-1.757-1.089-0.745 0.084-0.729 0.084-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495 0.998 0.108-0.776 0.418-1.305 0.762-1.605-2.665-0.3-5.467-1.335-5.467-5.93 0-1.31 0.468-2.38 1.235-3.22-0.135-0.303-0.54-1.523 0.105-3.176 0 0 1.005-0.322 3.3 1.23 0.96-0.267 1.98-0.399 3-0.405 1.02 0.006 2.04 0.138 3 0.405 2.28-1.552 3.285-1.23 3.285-1.23 0.645 1.653 0.24 2.873 0.12 3.176 0.765 0.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92 0.435 0.375 0.81 1.102 0.81 2.222 0 1.606-0.015 2.896-0.015 3.286 0 0.315 0.21 0.69 0.825 0.57 4.77-1.585 8.205-6.082 8.205-11.385 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="https://raw.githubusercontent.com/Juevan/Portifolio/refs/heads/main/src/images/ilustracao.svg" alt="Ilustração Programador" className="w-full h-auto" loading="lazy" />
                </div>
            </div>
        </section>
    )
}

export default Home
