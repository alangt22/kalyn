import React, { useState, useEffect } from 'react';
import banner1 from '/assets/images/banner1.png';
import banner2 from '/assets/images/banner2.png';
import './Carrossel.css';

function Carrossel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const banners = [banner1, banner2];
    
    // Função para alternar para a próxima imagem
    const nextBanner = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length); // Vai para a próxima imagem e retorna para 0 quando chega no final
    };

    // Efeito para trocar a imagem automatico
    useEffect(() => {
        const interval = setInterval(nextBanner, 3000);
        return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
    }, []);

    return (
        <article>
            <div className="banner">
                <img src={banners[currentIndex]} alt="Banner" />
            </div>
            <div className="buttons">
                <button className="prev" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)}>
                    &lt; 
                </button>
                <button className="next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)}>
                    &gt; 
                </button>
            </div>
        </article>
    )
}

export default Carrossel;