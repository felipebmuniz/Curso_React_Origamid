import React from 'react';
import {
  Route,
  Routes,
  NavLink,
  useLocation,
  useParams,
} from 'react-router-dom';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const search = new URLSearchParams(location.search);
  console.log(search.get('q'));

  return (
    <div>
      <h1 style={{ textTransform: 'capitalize' }}>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao"> | Avaliação</NavLink>
        <NavLink to="customizado"> | Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
