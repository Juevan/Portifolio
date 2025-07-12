import { useState } from "react";

function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isErrorModal, setIsErrorModal] = useState(false);
    const [isModalClosing, setIsModalClosing] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [errors, setErrors] = useState<{ nome?: string; email?: string; mensagem?: string }>({});

    const handleModalClose = () => {
        setIsModalClosing(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsErrorModal(false);
            setIsModalClosing(false);
            setNome("");
            setEmail("");
            setMensagem("");
        }, 300);
    };

    const handleSubmit = () => {
        let valid = true;
        const newErrors: { nome?: string; email?: string; mensagem?: string } = {};
        if (!nome.trim()) {
            newErrors.nome = "Campo obrigatório";
            valid = false;
        }
        if (!email.trim()) {
            newErrors.email = "Campo obrigatório";
            valid = false;
        }
        if (!mensagem.trim()) {
            newErrors.mensagem = "Campo obrigatório";
            valid = false;
        }
        setErrors(newErrors);
        if (valid) {
            setIsModalOpen(true);
            setIsErrorModal(false);
        }
    };

    return (
        <section id="contact" className="bg-gray-200 dark:bg-gray-800 py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Entre em Contato</h3>
                <p className="mb-6 text-slate-600 dark:text-slate-300">
                    Preencha o formulário abaixo ou envie um email para <a href="mailto:antoniojuevan@gmail.com" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">antoniojuevan@gmail.com</a> ou ligue para <strong className="text-cyan-600 dark:text-cyan-400">(21) 96533-7473</strong>.
                </p>
                <div className="flex justify-center items-center gap-8 mb-6">
                    <a href="https://www.linkedin.com/in/ajuevan/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.059 20h-2.941v-8.705h2.941v8.705zm-1.471-9.978c-0.934 0-1.693-0.758-1.693-1.693 0-0.934 0.759-1.693 1.693-1.693s1.693 0.759 1.693 1.693c0 0.935-0.759 1.693-1.693 1.693zm10.53 9.978h-2.941v-4.705c0-1.122-0.023-2.565-1.561-2.565-1.562 0-1.8 1.219-1.8 2.482v4.788h-2.941v-8.705h2.823v1.188h0.04c0.393-0.744 1.352-1.561 2.78-1.561 2.973 0 3.53 1.959 3.53 4.506v4.572z" />
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="https://github.com/Juevan" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100 transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.728-4.042-1.416-4.042-1.416-0.546-1.387-1.333-1.757-1.333-1.757-1.089-0.745 0.084-0.729 0.084-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495 0.998 0.108-0.776 0.418-1.305 0.762-1.605-2.665-0.3-5.467-1.335-5.467-5.93 0-1.31 0.468-2.38 1.235-3.22-0.135-0.303-0.54-1.523 0.105-3.176 0 0 1.005-0.322 3.3 1.23 0.96-0.267 1.98-0.399 3-0.405 1.02 0.006 2.04 0.138 3 0.405 2.28-1.552 3.285-1.23 3.285-1.23 0.645 1.653 0.24 2.873 0.12 3.176 0.765 0.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92 0.435 0.375 0.81 1.102 0.81 2.222 0 1.606-0.015 2.896-0.015 3.286 0 0.315 0.21 0.69 0.825 0.57 4.77-1.585 8.205-6.082 8.205-11.385 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="sr-only">GitHub</span>
                    </a>
                </div>
                {/* <form
                    className="max-w-lg mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 flex flex-col gap-6"
                    onSubmit={e => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                    noValidate
                >
                    <div className="flex flex-col items-start gap-1 w-full">
                        <label htmlFor="nome" className="font-semibold text-gray-700 dark:text-gray-200">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            className={`w-full px-4 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${errors.nome ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            autoComplete="off"
                        />
                        {errors.nome && <span className="text-red-500 text-sm">{errors.nome}</span>}
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                        <label htmlFor="email" className="font-semibold text-gray-700 dark:text-gray-200">Email</label>
                        <input
                            id="email"
                            type="email"
                            className={`w-full px-4 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            autoComplete="off"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                        <label htmlFor="mensagem" className="font-semibold text-gray-700 dark:text-gray-200">Mensagem</label>
                        <textarea
                            id="mensagem"
                            className={`w-full px-4 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none min-h-[120px] ${errors.mensagem ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                            value={mensagem}
                            onChange={e => setMensagem(e.target.value)}
                        />
                        {errors.mensagem && <span className="text-red-500 text-sm">{errors.mensagem}</span>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold py-3 rounded-lg shadow hover:from-emerald-700 hover:to-cyan-700 transition-colors text-lg"
                    >
                        Enviar Mensagem
                    </button>
                </form> */}
            </div>
            {isModalOpen && (
                <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-300
                     ${isModalClosing 
                         ? "opacity-0 scale-90 -translate-y-5" 
                         : "opacity-100 scale-100 translate-y-0"}`}>
                    <div className="bg-white dark:bg-gray-700 rounded shadow-lg p-6 max-w-sm w-full text-center">
                        <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                            {isErrorModal ? "Erro" : "Confirmação"}
                        </h4>
                        <p className="mb-6 text-gray-700 dark:text-gray-300">
                            {isErrorModal 
                                ? "Falha ao enviar mensagem. Tente novamente." 
                                : "Sua mensagem foi enviada com sucesso!"}
                        </p>
                        <button
                            onClick={handleModalClose}
                            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition-colors"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Contact;