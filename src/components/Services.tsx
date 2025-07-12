function Services() {
    const services = [
        {
            id: 1,
            title: 'Consultoria TOTVS FLUIG',
            description: 'Implementação completa, customização e otimização de processos na plataforma TOTVS FLUIG.',
            features: [
                'Análise e modelagem de processos BPM',
                'Desenvolvimento de widgets customizados',
                'Integração com sistemas legados',
                'Treinamento de equipes',
                'Suporte técnico especializado'
            ],
            icon: '🏢',
            color: 'bg-emerald-500'
        },
        {
            id: 2,
            title: 'Consultoria TOTVS RM',
            description: 'Implementação, customização e otimização completa do sistema TOTVS RM com integração para qualquer módulo.',
            features: [
                'Desenvolvimento de Metadados customizados',
                'Criação de Fórmulas Visuais avançadas',
                'Integrações com qualquer módulo do sistema',
                'Experiência: Back Office, Compras, Financeiro, RH e Fiscal',
                'Consultas SQL otimizadas e performance'
            ],
            icon: '🏗️',
            color: 'bg-blue-500'
        },
        {
            id: 3,
            title: 'Consultoria Zeev',
            description: 'Serviços especializados para implementação e customização da plataforma Zeev.',
            features: [
                'Configuração de workflows',
                'Desenvolvimento de automações',
                'Criação de dashboards personalizados',
                'Integração com APIs externas',
                'Treinamento de equipes',
                'Suporte técnico especializado',
                'Otimização de performance'
            ],
            icon: '⚡',
            color: 'bg-cyan-500'
        },
        {
            id: 4,
            title: 'Integração de Sistemas',
            description: 'Conecte seus sistemas empresariais para um fluxo de dados eficiente e automatizado.',
            features: [
                'APIs REST e SOAP',
                'Integração Protheus/RM',
                'Sincronização de dados',
                'Webhooks e automações',
                'Monitoramento de integrações'
            ],
            icon: '🔗',
            color: 'bg-violet-500'
        },
        {
            id: 5,
            title: 'Automação de Processos',
            description: 'Automatize processos empresariais para aumentar eficiência e reduzir custos operacionais.',
            features: [
                'Modelagem BPMN',
                'Workflows automatizados',
                'Notificações inteligentes',
                'Relatórios automáticos',
                'Aprovações digitais'
            ],
            icon: '🤖',
            color: 'bg-orange-500'
        },
        {
            id: 6,
            title: 'Desenvolvimento Full Stack',
            description: 'Soluções completas de desenvolvimento web para suas necessidades empresariais.',
            features: [
                'Frontend React/TypeScript',
                'Backend Node.js/Python',
                'Banco de dados SQL/NoSQL',
                'Deploy e DevOps',
                'Manutenção e suporte'
            ],
            icon: '💻',
            color: 'bg-slate-500'
        },
        {
            id: 7,
            title: 'Análise de Dados',
            description: 'Transforme seus dados em insights estratégicos para tomada de decisões.',
            features: [
                'Análise com Python/Pandas',
                'Visualização com Power BI',
                'Dashboards interativos',
                'Relatórios personalizados',
                'KPIs e métricas'
            ],
            icon: '📊',
            color: 'bg-amber-500'
        },
        {
            id: 8,
            title: 'Desenvolvimento AWS Lambda & S3',
            description: 'Soluções serverless completas com AWS Lambda e gerenciamento avançado de buckets S3.',
            features: [
                'Desenvolvimento de funções AWS Lambda',
                'Configuração e otimização de S3 Buckets',
                'Implementação de APIs com API Gateway',
                'Processamento automático de arquivos',
                'Sistemas de backup inteligente',
                'Otimização de custos e performance'
            ],
            icon: '☁️',
            color: 'bg-sky-500'
        }
    ];

    return (
        <section id="services" className="bg-white dark:bg-gray-800 py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Serviços de Consultoria</h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Ofereço serviços especializados de consultoria e desenvolvimento customizado para atender 
                        às necessidades específicas da sua empresa. Cada projeto é único e desenvolvido sob medida.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.id} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4`}>
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h4>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-green-500 mr-2 mt-1">✓</span>
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg p-8 text-center text-white">
                    <h4 className="text-2xl font-bold mb-4">Precisa de uma solução customizada?</h4>
                    <p className="mb-6 text-white/90">
                        Cada empresa tem necessidades únicas. Vamos conversar sobre como posso desenvolver 
                        uma solução personalizada para os seus desafios específicos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="#contact" 
                            className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Solicitar Consultoria
                        </a>
                        <a 
                            href="#portfolio" 
                            className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                        >
                            Ver Produtos Prontos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
