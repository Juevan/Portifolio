import { useState, useEffect } from 'react';

function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const prefersDark =
            localStorage.getItem('darkMode') === 'true' ||
            (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(prefersDark);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => {
            const newMode = !prev;
            localStorage.setItem('darkMode', newMode ? 'true' : 'false');
            return newMode;
        });
    };

    return (
        <header className="bg-white dark:bg-gray-800 shadow w-full">
            <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
                {/* Agrupamento do título e redes sociais (desktop) */}
                <div className="flex items-center space-x-4">
                    <div className="text-xl font-bold">Antonio Juevan</div>
                </div>
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <button id="darkModeToggle" onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                            {darkMode ? (
                                <svg className="w-6 h-6 block" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 block" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>
                    </li>
                    <li><a href="#home" className="hover:text-blue-500">Inicio</a></li>
                    <li><a href="#about" className="hover:text-blue-500">Sobre</a></li>
                    <li><a href="#portfolio" className="hover:text-blue-500">Portifólio</a></li>
                    <li><a href="#services" className="hover:text-blue-500">Serviços</a></li>
                    <li><a href="#resume" className="hover:text-blue-500">Resumo</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contatos</a></li>
                </ul>
            </div>
            <div
                className={`fixed inset-0 z-50 md:hidden bg-white dark:bg-gray-800 flex items-center justify-center transition-all duration-300 transform ${
                    isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
                <div className="absolute top-4 right-4">
                    <button className="focus:outline-none" onClick={() => setIsMenuOpen(false)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="space-y-6 text-center">
                    <li>
                        <button id="darkModeToggle" onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                            {darkMode ? (
                                <svg className="w-6 h-6 block" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 block" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>
                    </li>
                    <li><a href="#home" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
                    <li><a href="#about" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
                    <li><a href="#portfolio" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Portifólio</a></li>
                    <li><a href="#services" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
                    <li><a href="#resume" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Resumo</a></li>
                    <li><a href="#contact" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Contatos</a></li>
                    <li className="flex justify-center space-x-4">
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
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
