function Techs() {
    return (
        <section id="techs" className="bg-white dark:bg-gray-800 py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Minhas Techs</h3>
                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Já Utilizadas</h4>
                        <div className="flex flex-col items-center space-y-2">
                            <span>FLUIG (Widgets, Workflows, Integrações SOAP/REST)</span>
                            <span>Heflo (BPMN 2.0, Automação de Processos)</span>
                            <span>Zeev (Low-code, Automação de Processos)</span>
                            <span>Node.js</span>
                            <span>SQL</span>
                            <span>TypeScript</span>
                            <span>SOAP/REST</span>
                            <span>React</span>
                            <span>HTML, CSS, JavaScript</span>
                            <span>GitHub</span>
                            <span>Power BI</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Atualmente Desenvolvendo</h4>
                        <div className="flex flex-col items-center space-y-2">
                            <span>Integrações Avançadas</span>
                            <span>Python (Análise de Dados - Pandas, Matplotlib)</span>
                            <span>Metodologias Ágeis (Scrum)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Techs;
