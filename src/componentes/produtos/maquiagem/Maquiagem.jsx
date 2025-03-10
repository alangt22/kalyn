import React, { useState, useEffect, useRef } from 'react';
import { FaTag, FaInfoCircle } from 'react-icons/fa';
import '../Produtos.css';
import { useCarrinho } from '../../../context/CarrinhoContext';
import maquiagem from '../../../data/maquiagem.json'; 
import Carrinho from '../../carrinho/Carrinho';
import '../../carrinho/Carrinho.css';

function Maquiagem() {
  const { adicionarAoCarrinho } = useCarrinho();
  const [mensagem, setMensagem] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);
  const produtosRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          if (!visibleItems.includes(index)) {
            setVisibleItems(prev => [...prev, index]);
          }
        }
      });
    }, { threshold: 0.1 });

    produtosRef.current.forEach(card => observer.observe(card));

    return () => {
      produtosRef.current.forEach(card => observer.unobserve(card));
    };
  }, [visibleItems]);

  const adicionarProduto = (produto) => {
    adicionarAoCarrinho(produto);
    setMensagem(`${produto.nome} foi adicionado ao carrinho!`);
    setTimeout(() => setMensagem(''), 4000);
  };

  return (
    <section className='produto-list'>
      <div className="nome"><h1>Maquiagem</h1></div>
      <div className="container-produto">
        {maquiagem.length > 0 ? (
          maquiagem.map((produto) => (
            <div
              key={produto.id} 
              ref={el => (produtosRef.current[produto.id] = el)} 
              data-index={produto.id} 
              className='produto'
            >

              <img src={produto.img || 'caminho/para/imagem-padrao.jpg'} alt={produto.nome} />
              <div className="produto-info">
                <h3>{produto.nome}</h3>
                <p className="preco"><FaTag /> R$ {produto.preco.toFixed(2)}</p>
                <p className="descricao"><FaInfoCircle /> {produto.descricao}</p>
                <button className="adicionar-carrinho" onClick={() => adicionarProduto(produto)}>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </div>

      {mensagem && <div className="mensagem">{mensagem}</div>}
      <Carrinho />
    </section>
  );
}

export default Maquiagem;
