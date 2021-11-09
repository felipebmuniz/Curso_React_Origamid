import React from 'react';
// React Helment - Componente de instalçao para o Head

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Dogs | ' + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.description);
    console.log(props);
  }, [props]);

  return <></>;
};

export default Head;
