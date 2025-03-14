import { FaInstagram, FaWhatsapp, FaBox, FaTag, FaRegSmileBeam, FaBrush, FaPalette, FaEye } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '/assets/images/Kalyn.png';
import './Home.css';
import '../index.css';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [showIcons, setShowIcons] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
          const footer = document.querySelector('footer');
          const footerTop = footer ? footer.getBoundingClientRect().top : 0;
          const windowHeight = window.innerHeight;
    
          if (footerTop <= windowHeight) {
            setShowIcons(false); // Esconde os ícones quando o footer aparece
          } else {
            setShowIcons(true); // Exibe os ícones quando o footer não está visível
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Remove o event listener ao desmontar o componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    // Função para alternar o menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <section className="container">
            <div className={`icons ${showIcons ? '' : 'hidden'}`}>
                <a href="#" target='_blank' rel='noopener noreferrer'>
                    <FaInstagram size={40} color="#e700a2" />
                </a>
                <a href="#" target='_blank' rel='noopener noreferrer'>
                    <FaWhatsapp size={40} color="#e700a2" />
                </a>
            </div>

            <div className="logo">
                <img src={img} alt="Kalyn" />
            </div>
            

            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            </div>

            <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                <ul className="menu-list">
                    {/* <li><a href="#"><FaBox size={50} style={{ marginRight: '8px' }} /> Todos os produtos</a></li>
                    <li><a href="#"><FaTag size={50} style={{ marginRight: '8px' }} /> Acessórios</a></li>
                    <li><a href="#"><FaRegSmileBeam size={50} style={{ marginRight: '8px' }} /> Cabelo</a></li> */}
                    <li><Link to="/maquiagem"><FaBrush size={20} style={{ marginRight: '8px' }} /> Maquiagem</Link></li>
                    {/* <li><a to="/paleta"><FaPalette size={20} style={{ marginRight: '8px' }} /> Paleta</a></li> */}
                    <li><Link to="/olhos"><FaEye size={20} style={{ marginRight: '8px' }} /> Olhos</Link></li>
                </ul>
            </nav>
        </section>
    )
}
export default Home;