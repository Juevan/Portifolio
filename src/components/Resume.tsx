function Resume() {
    return (<section id="resume" className="bg-gray-100 dark:bg-gray-900 py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Experiência Profissional</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
                    <h4 className="font-bold text-xl mb-2">Desenvolvedor Junior</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                        <a className="hover:text-blue-500" href="https://www.linkedin.com/company/raizeducacao" target="_blank" rel="noopener noreferrer">Raiz educação</a> | 07/2024 - Atualmente<br />
                        Formação e prática em desenvolvimento web, aprimorando habilidades em HTML, CSS, JavaScript e frameworks modernos.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
                    <h4 className="font-bold text-xl mb-2">Analista FLUIG Junior</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                        <a className="hover:text-blue-500" href="https://www.linkedin.com/company/boadigital" target="_blank" rel="noopener noreferrer">Boa Digital</a> | 03/2023 - Atualmente<br />
                        Desenvolvimento e implementação de soluções personalizadas na plataforma FLUIG da TOTVS, com análise de requisitos, configuração de interfaces e workflows.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
                    <h4 className="font-bold text-xl mb-2">Analista Back-End Junior</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                        <a className="hover:text-blue-500" href="https://www.linkedin.com/company/ciedsbrasil" target="_blank" rel="noopener noreferrer">CIEDS</a> | 07/2023 - 01/2024<br />
                        Criação de scripts para integração entre ERP NETSUITE e POWER BI utilizando Node.js e consumo de API REST, aplicando metodologias ágeis.
                    </p>
                </div>
            </div>
            <div className="mt-10 text-center">
                <blockquote className="italic text-gray-700 dark:text-gray-300">
                    “Inovação distingue um líder de um seguidor.”
                    <br />
                    — Steve Jobs
                </blockquote>
            </div>
        </div>
    </section>)
}

export default Resume;