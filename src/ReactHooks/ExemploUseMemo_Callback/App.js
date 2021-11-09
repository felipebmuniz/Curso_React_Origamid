import React from 'react';

const set1 = new Set();
const set2 = new Set();

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = React.useCallback(() => {
    console.log('Teste Callback');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log(set1);
  console.log(set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = React.useState(0);

  //   const valor = React.useMemo(() => {
  //     const localItem = window.localStorage.getItem('produto');
  //     console.log('Aconteceu o memo');
  //     return localItem;
  //   }, []);

  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);

  console.log(valor);
  console.log(performance.now() - t1);

  const handleClik = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return (
    <div>
      <button onClick={handleClik}>{contar}</button>
      <Produto />
    </div>
  );
};

export default App;
