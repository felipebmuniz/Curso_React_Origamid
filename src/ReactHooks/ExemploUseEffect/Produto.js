import React from 'react';

const Produto = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>{'R$' + dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default Produto;
