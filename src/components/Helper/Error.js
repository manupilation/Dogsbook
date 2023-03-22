import React from 'react';

const Error = ({error}) => {
  if(!error) return null;
  return (
    <p style={{color: "#F31"}}>
      {error}
    </p>
  )
}

Error.defaultProps = {
  error: "Ocorreu algum problema",
}

export default Error;
