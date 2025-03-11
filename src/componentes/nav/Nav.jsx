import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaTag, FaRegSmileBeam, FaBrush, FaPalette, FaEye } from 'react-icons/fa';
import './Nav.css';

function Nav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
     
      if (window.scrollY > 145) { // Quando o scroll ultrapassar a posição inicial do menu
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`menu-nav ${isSticky ? 'sticky' : ''}`}>
      <ul className='menu-list-nav'>
{/*     <li><a href="/produtos"><FaBox size={20} style={{ marginRight: '8px' }} /> Todos os produtos</a></li>
        <li><a href="/acessorios"><FaTag size={20} style={{ marginRight: '8px' }} /> Acessórios</a></li>
        <li><a href="/cabelo"><FaRegSmileBeam size={20} style={{ marginRight: '8px' }} /> Cabelo</a></li> */}
        <li><Link to="/maquiagem"><FaBrush size={20} style={{ marginRight: '8px' }} /> Maquiagem</Link></li>
{/*     <li><a to="/paleta"><FaPalette size={20} style={{ marginRight: '8px' }} /> Paleta</a></li> */}
        <li><Link to="/olhos"><FaEye size={20} style={{ marginRight: '8px' }} /> Olhos</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
