import SocialIcons from './SocialIcons';
import SectionContainer from './SectionContainer';
import ilustracaoSvg from '../images/ilustracao.svg';

function Home() {
    return (
        <SectionContainer id="home" variant="gradient">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
                    <div className="mb-6">
                        <span className="inline-block px-3 lg:px-4 py-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full text-xs lg:text-sm font-medium mb-4 mt-8 lg:mt-0">
                            👋 Bem-vindo ao meu portfólio
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight text-gray-900 dark:text-white">
                            Olá, sou{' '}
                            <span
                                className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-violet-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-violet-400 bg-clip-text text-transparent"
                                aria-label="Antonio Juevan"
                            >
                                Antonio Juevan
                            </span>
                        </h1>
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 dark:text-gray-200 mb-6 lg:mb-8 leading-relaxed">
                        <strong className="text-emerald-600 dark:text-emerald-400">Desenvolvedor Full Stack</strong> e{' '}
                        <strong className="text-cyan-600 dark:text-cyan-400">Analista de Sistemas</strong> com formação em Engenharia da Computação.
                        Especializo-me em criar soluções inovadoras e eficientes, desde interfaces responsivas até APIs robustas,
                        sempre focado em resultados que agreguem valor real.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                        <a
                            href="#portfolio"
                            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span>Veja meus projetos</span>
                            <svg className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <SocialIcons variant="default" className="mt-4 sm:mt-0" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-3xl opacity-20 scale-150"></div>
                        <img
                            src={ilustracaoSvg}
                            alt="Ilustração Programador"
                            className="relative w-full h-auto max-w-lg transform hover:scale-105 transition-transform duration-300 recolor-red"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Home
