import React from 'react';

const ExSelect = () => {
  const [select, setSelect] = React.useState('');

  return (
    <from>
      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </from>
  );
};

export default ExSelect;
