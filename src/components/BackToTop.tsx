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
        <button ref={backToTopRef} id="backToTop" onClick={scrollToTop} className="hidden fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded">
            ↑ Voltar ao Topo
        </button>
    );
}

export default BackToTop;
