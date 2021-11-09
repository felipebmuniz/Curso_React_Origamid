import React from 'react';

const ExRadio = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setcor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          // name="produto"
          checked={produto === 'smartphone'}
          value="smartphone"
        />
        Smartphone
      </label>

      <label>
        <input
          type="radio"
          onChange={handleChange}
          // name="produto"
          checked={produto === 'notebook'}
          value="notebook"
        />
        Notebook
      </label>
      {produto}

      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setcor(target.value)}
          // name="produto"
          checked={cor === 'azul'}
          value="azul"
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setcor(target.value)}
          // name="produto"
          checked={cor === 'vermelho'}
          value="vermelho"
        />
        Vermelho
      </label>
      {cor}
    </form>
  );
};

export default ExRadio;
