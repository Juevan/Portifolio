import React, { useState } from "react";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState({ nome: "", email: "", mensagem: "" });

  const handleModalClose = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsErrorModal(false);
      setIsModalClosing(false);
      setNome("");
      setEmail("");
      setMensagem("");
      setErrors({ nome: "", email: "", mensagem: "" });
    }, 300);
  };

  const handleSubmit = async () => {
    const newErrors = { nome: "", email: "", mensagem: "" };
    let valid = true;
    if (!nome.trim()) {
      newErrors.nome = "Campo obrigatório";
      valid = false;
    } else if (nome.length > 100) {
      newErrors.nome = "Máximo de 100 caracteres";
      valid = false;
    }
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = "Campo obrigatório";
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email inválido";
      valid = false;
    }
    if (!mensagem.trim()) {
      newErrors.mensagem = "Campo obrigatório";
      valid = false;
    } else if (mensagem.length > 500) {
      newErrors.mensagem = "Máximo de 500 caracteres";
      valid = false;
    }
    setErrors(newErrors);
    if (!valid) return;

    const apiUrl = "https://validador-web.vercel.app/enviar-contato";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (response.ok) {
        setIsErrorModal(false);
      } else {
        console.warn("Status inesperado:", response.status);
        setIsErrorModal(true);
      }
    } catch (err) {
      console.error("Erro enviando para a API:", err);
      setIsErrorModal(true);
    } finally {
      setIsModalOpen(true);
    }
  };

  return (
    <section id="contact" className="bg-gray-200 dark:bg-gray-800 py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
          Entre em Contato
        </h3>
        <p className="mb-6 text-slate-600 dark:text-slate-300">
          Preencha o formulário abaixo ou envie um email para{" "}
          <a
            href="mailto:antoniojuevan@gmail.com"
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors"
          >
            antoniojuevan@gmail.com
          </a>{" "}
          ou ligue para{" "}
          <a
            href="https://wa.me/5521965337473"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-400 hover:underline focus:underline"
            title="Conversar no WhatsApp"
          >
            (21) 96533-7473
          </a>.
        </p>

        <form
          className="max-w-lg mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          noValidate
        >

          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="nome" className="font-semibold text-gray-700 dark:text-gray-200">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              className={`w-full px-4 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${errors.nome ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                }`}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              autoComplete="off"
            />
            {errors.nome && <span className="text-red-500 text-sm">{errors.nome}</span>}
          </div>


          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="email" className="font-semibold text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>


          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="mensagem" className="font-semibold text-gray-700 dark:text-gray-200">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              className={`w-full px-4 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none min-h-[120px] ${errors.mensagem ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                }`}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
            {errors.mensagem && <span className="text-red-500 text-sm">{errors.mensagem}</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold py-3 rounded-lg shadow hover:from-emerald-700 hover:to-cyan-700 transition-colors text-lg"
          >
            Enviar Mensagem
          </button>
        </form>


        {isModalOpen && (
          <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-300 ${isModalClosing ? "opacity-0 scale-90 -translate-y-5" : "opacity-100 scale-100 translate-y-0"
              }`}
          >
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
      </div>
    </section>
  );
}

export default Contact;
