import React from 'react';
import { Link } from 'react-router-dom';
// import Head from './Head';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      {/* <Head title="Home" description="Descrição da home" /> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content="Descrição da Home" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
      </Helmet>
      <h1>Home</h1>
      <p>Essa e a Home</p>
      <Link to="produto/notebook">Notebook</Link>{' '}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
