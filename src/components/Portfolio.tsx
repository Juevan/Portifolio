import { useEffect } from "react";

function Portfolio() {
    useEffect(() => {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterBtns.forEach(btn => {
            const handleClick = () => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-blue-600', 'text-white');
                    b.classList.add('bg-gray-300', 'text-gray-800');
                });
                btn.classList.remove('bg-gray-300', 'text-gray-800');
                btn.classList.add('bg-blue-600', 'text-white');

                const filter = btn.getAttribute('data-filter');
                portfolioItems.forEach(item => {
                    item.classList.remove('hidden');
                    if (filter !== 'all' && item.getAttribute('data-category') !== filter) {
                        item.classList.add('hidden');
                    }
                });
            };
            btn.addEventListener('click', handleClick);
        });
    }, []);

    return (<section id="portfolio" className="bg-gray-100 dark:bg-gray-900 py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Meu Portfólio</h3>
            {/* <div className="flex justify-center space-x-4 mb-10">
                <button className="filter-btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" data-filter="all">Todos</button>
                <button className="filter-btn bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600" data-filter="fluig">FLUIG</button>
                <button className="filter-btn bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600" data-filter="web">Web App</button>
                <button className="filter-btn bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600" data-filter="integration">Integrações</button>
            </div> */}
            <div className="text-center text-gray-600 dark:text-gray-400">
                Em desenvolvimento...
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="portfolio-item bg-white dark:bg-gray-800 rounded shadow p-4" data-category="fluig">
                    <div className="bg-gray-200 dark:bg-gray-700 h-40 mb-4 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-300">Imagem Widget FLUIG</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Widget FLUIG Personalizado</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Desenvolvimento de widget customizado para interface FLUIG.
                    </p>
                </div>
                <div className="portfolio-item bg-white dark:bg-gray-800 rounded shadow p-4" data-category="integration">
                    <div className="bg-gray-200 dark:bg-gray-700 h-40 mb-4 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-300">Imagem Integração</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Integração SOAP/REST</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Script de integração entre sistemas PROTHEUS, RM e bancos SQL.
                    </p>
                </div>
                <div className="portfolio-item bg-white dark:bg-gray-800 rounded shadow p-4" data-category="web">
                    <div className="bg-gray-200 dark:bg-gray-700 h-40 mb-4 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-300">Imagem Projeto Web</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Aplicação Web com React</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Desenvolvimento de interface web responsiva utilizando React e Tailwind CSS.
                    </p>
                </div>
            </div> */}
        </div>
    </section>)
}

export default Portfolio;