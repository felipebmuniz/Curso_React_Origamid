import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  const { pathname } = window.location;

  let Pagina;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  console.log(pathname);
  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
