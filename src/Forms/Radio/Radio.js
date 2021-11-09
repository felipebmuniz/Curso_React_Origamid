import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <>
      {options.map((option) => (
        <label key={option} htmlFor={option}>
          <input
            type="radio"
            id={option}
            value={option}
            checked={value === option}
            onChange={handleChange}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
