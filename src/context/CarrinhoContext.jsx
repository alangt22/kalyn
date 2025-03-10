import React, { createContext, useContext, useState, useEffect } from 'react';

// Criação do Contexto
const CarrinhoContext = createContext();

// Provedor que vai envolver a aplicação
export const CarrinhoProvider = ({ children }) => {
  // Recuperando o carrinho armazenado no localStorage (se existir)
  const [carrinho, setCarrinho] = useState(() => {
    const storedCarrinho = localStorage.getItem('carrinho');
    return storedCarrinho ? JSON.parse(storedCarrinho) : [];
});



// Função para adicionar produtos ao carrinho
const adicionarAoCarrinho = (produto) => {
  const produtoExistente = carrinho.find(item => item.nome === produto.nome);

  if (produtoExistente) {
    setCarrinho(carrinho.map(item =>
      item.nome === produto.nome
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    ));
  } else {
    setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
  }
};



// Função para incrementar a quantidade de um produto no carrinho
const incrementarQuantidade = (produto) => {
  setCarrinho(carrinho.map(item =>
    item.nome === produto.nome
      ? { ...item, quantidade: item.quantidade + 1 }
      : item
  ));
};



// Função para decrementar a quantidade de um produto no carrinho
const decrementarQuantidade = (produto) => {
  setCarrinho(carrinho.map(item =>
    item.nome === produto.nome && item.quantidade > 1
      ? { ...item, quantidade: item.quantidade - 1 }
      : item
  ));
};


  

const excluirCarrinho = (produto) => {
  const updatedCarrinho = carrinho.filter(item => item.nome !== produto.nome);
  setCarrinho(updatedCarrinho);  // Atualiza o estado do carrinho
};

const limparCarrinho = () => {
  setCarrinho([]);  
}

// Função para calcular o total do carrinho
const calcularTotal = () => {
  return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
};

// Usando useEffect para salvar o carrinho no localStorage sempre que ele for alterado
useEffect(() => {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}, [carrinho]);

return (
  <CarrinhoContext.Provider value={{ 
    carrinho, 
    adicionarAoCarrinho, 
    calcularTotal, 
    excluirCarrinho, 
    limparCarrinho, 
    incrementarQuantidade,
    decrementarQuantidade
  }}>
    {children}
  </CarrinhoContext.Provider>
);

};

// Hook customizado para acessar o contexto
export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};
