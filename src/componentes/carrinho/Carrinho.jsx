import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingBag, FaTimes } from 'react-icons/fa';
import { FaTag} from 'react-icons/fa';
import { useCarrinho } from '.././../context/CarrinhoContext';
import'./Carrinho.css'

function Carrinho() {
    const { carrinho, adicionarAoCarrinho, calcularTotal, excluirCarrinho, limparCarrinho, incrementarQuantidade, decrementarQuantidade } = useCarrinho();
    const [isOpen, setIsOpen] = useState(false);
    const [endereco, setEndereco] = useState('');
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const gerarLinkWhatsApp = () => {
        const produtosCarrinho = carrinho.map(item =>
          `${item.nome} (R$${item.preco.toFixed(2)}) - Quantidade: ${item.quantidade}` 
        ).join('\n');
    
        const total = calcularTotal();
        const mensagemPedido = `*Pedido de Maquiagem*\n\n${produtosCarrinho}\n\nTotal: R$ ${total}\n\nEndereço de entrega: ${endereco}`;
    
        const encodedMessage = encodeURIComponent(mensagemPedido);
        const linkWhatsApp = `https://wa.me/5511940094503?text=${encodedMessage}`;
    
        window.open(linkWhatsApp, '_blank');
        limparCarrinho();
    };


    return (
        <>
        
        <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={30} /> : <FaShoppingBag size={30} />}
        </div>

        {isOpen && (
            <div className="cart-dropdown">
            <div className="cart-header"><h3>Carrinho</h3></div>
            <div className="cart-items">
                {carrinho.length > 0 ? (
                carrinho.map((item, index) => (
                    <div key={index} className="cart-item">
                    <img src={item.img} alt={item.nome} className="cart-item-img" />
                    <div className="cart-item-info">
                    <p>{item.nome}</p>
                    <p className="preco">
                        <FaTag />
                        R$ {item.preco ? item.preco.toFixed(2) : 'Preço Indisponível'}
                    </p>
                    <p>
                        Qtd: 
                        <button onClick={() => decrementarQuantidade(item)}>-</button>
                        {item.quantidade}
                        <button onClick={() => incrementarQuantidade(item)}>+</button>
                    </p>
                    </div>
                    <div className="excluir" onClick={() => excluirCarrinho(item)}>
                    X
                    </div>
                </div>
                
                ))
                ) : (
                <p>Carrinho vazio</p>
                )}
            </div>
            <div className="cart-total">
                <h3>Total: R$ {calcularTotal()}</h3>
            </div>
            <div className="endereco-container">
                <label>Endereço de entrega:</label>
                <input
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                placeholder="Digite seu endereço"
                />
            </div>

            <div className="botao-enviar">
                <button onClick={gerarLinkWhatsApp}>Enviar Pedido pelo WhatsApp</button>
            </div>
            </div>
        )}
        </>
    )
}

export default Carrinho;