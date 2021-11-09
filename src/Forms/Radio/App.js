import React from 'react';
import Radio from './Radio';

const App = () => {
  const [produto, setProduto] = React.useState('smartphone');
  const [cor, setCor] = React.useState('preto');

  return (
    <form style={{ textTransform: 'capitalize' }}>
      <h2>Produtos</h2>
      <Radio
        options={['smartphone', 'notebook', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      {produto}

      <h2>Cores</h2>
      <Radio
        options={['azul', 'vermelho', 'preto']}
        value={cor}
        setValue={setCor}
      />
      {cor}
    </form>
  );
};

export default App;
