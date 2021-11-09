import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setContar((contar) => contar - 1);
  }

  return (
    <div>
      <p>Produto: {global.contar}</p>
      <button style={{ margin: '1rem' }} onClick={handleClick}>
        Remover
      </button>
      <button onClick={global.adicionarUm}>Adicionar 1</button>
      <button style={{ margin: '1rem' }} onClick={global.adicionarDois}>
        Adicionar 2
      </button>
    </div>
  );
};

export default Produto;
