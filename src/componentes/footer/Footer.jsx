import React from 'react'
import img from '../../images/Kalyn.png'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'

function Footer(){
  return (
    <footer>
        <div className="rodape">
            <div className="icones">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} color="#e700a2" />
                </a>
                <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={40} color="#e700a2" />
                </a>
            </div>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="links">
                <a>teste@teste.com</a>
                <a>teste@teste.com</a>
                <a>11 91234-5678</a>
                <a>11 91234-5678</a>
            </div>
        </div>
        <p>copy rigth - <a>Kalyn -</a> 2025</p>
    </footer>
  )
}

export default Footer