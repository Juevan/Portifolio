import { useEffect, useRef } from "react";

function BackToTop() {
    const backToTopRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (backToTopRef.current) {
                if (window.scrollY > window.innerHeight / 2) {
                    backToTopRef.current.classList.remove('hidden');
                } else {
                    backToTopRef.current.classList.add('hidden');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button 
            ref={backToTopRef} 
            id="backToTop" 
            onClick={scrollToTop} 
            className="hidden fixed bottom-4 right-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 lg:px-4 py-2 lg:py-3 rounded-full font-semibold shadow-lg hover:from-emerald-700 hover:to-cyan-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm lg:text-base"
        >
            ↑ Voltar ao Topo
        </button>
    );
}

export default BackToTop;
