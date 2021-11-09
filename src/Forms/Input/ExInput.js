import React from 'react';

const ExInput = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        value={nome}
        id="nome"
        onChange={(event) => setNome(event.target.value)}
      />
      <p>{nome}</p>

      <input
        type="text"
        name="nome"
        value={form.nome}
        id="nome"
        onChange={handleChange}
      />
      <p>{form.nome}</p>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        id="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>{email}</p>

      <input
        type="email"
        name="email"
        value={form.email}
        id="email"
        onChange={handleChange}
      />
      <p>{form.email}</p>

      <button>Enviar</button>
    </form>
  );
};

export default ExInput;
