import React from 'react';
import Card from 'react-bootstrap/Card'; // yarn add react-bootstrap bootstrap

const App = () => {
  return (
    // ____UTILIZANDO O BOOTSTRAP PURO____ Version>5
    // <div className="card bg-dark text-white m-5" style={{ maxWidth: '18rem' }}>
    //   <div className="card-header">Notebook</div>
    //   <div className="card-body">
    //     <h5 className="card-title">R$ 2500</h5>
    //     <p className="card-text">
    //       Esse é um notebook com 1TB de HD e 128GB de SSD, 10GB de memória RAM,
    //       Processador Ryzen 5 - 3500U e Randeo Vega 8 de 2GB de memória
    //       compartilhada.
    //     </p>
    //   </div>
    // </div>

    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Esse é um notebook com 1TB de HD e 128GB de SSD, 10GB de memória RAM,
          Processador Ryzen 5 - 3500U e Randeo Vega 8 de 2GB de memória
          compartilhada.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
