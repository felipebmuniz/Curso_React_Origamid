import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <div>
      <p>
        <Input id="email" label="Email" required />
      </p>
      <p>
        <Input id="password" type="password" label="Senha" />
      </p>
      <Button />
    </div>
  );
};

export default Form;
