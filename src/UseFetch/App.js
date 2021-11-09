import React from 'react';
import useFetch from './useFetch';

import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    async function fethData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response, json);
    }

    fethData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) <p>{error}</p>;
  if (loading) return <div>Carregando...</div>;
  if (data)
    return (
      <div>
        <p>Preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
