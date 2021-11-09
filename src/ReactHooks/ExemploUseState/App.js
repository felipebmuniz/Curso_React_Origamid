import React from 'react';
// import ButtonModal from './ButtonModal';
// import Modal from './Modal';

const App = () => {
  // const [modal, setModal] = React.useState(false);
  // const [items, setItems] = React.useState('Item');

  // function handleClick() {
  //   setItems('Item1');
  // }

  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => contar + 1);
    setItems((items) => [...items, 'Item' + (contar + 1)]);
  }

  return (
    // <div>
    //   <p>{items}</p>
    //   <button onClick={handleClick}>Clicar</button>
    //   <Modal modal={modal} setModal={setModal} />
    //   <ButtonModal setModal={setModal} modal={modal} />
    // </div>

    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
