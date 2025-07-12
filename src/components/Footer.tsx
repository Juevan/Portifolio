import SocialIcons from './SocialIcons';

function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-slate-300 py-6 lg:py-8 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-xs lg:text-sm">
                            &copy; 2025{' '}
                            <span className="font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                Antonio Juevan
                            </span>
                            {' '}- Todos os direitos reservados.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                            Desenvolvido com ❤️ usando React e Tailwind CSS
                        </p>
                    </div>
                    <SocialIcons variant="footer" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;