import React from 'react';

const App = () => {
  const [textarea, setTextarea] = React.useState('');
  return (
    <form>
      <textarea
        name="texto"
        id="texto"
        cols="30"
        rows="10"
        onChange={({ target }) => setTextarea(target.value)}
      />
      {textarea}
    </form>
  );
};

export default App;
