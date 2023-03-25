import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../Form/Button/Button';
import Input from '../Form/Input/Input';

const LoginRecover = () => {
  const email = useForm('email');
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section>
      <h1 className='title'>Perdeu a senha ?</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email/Usuário"
          type="text"
          name="email"
          {...email}
        />
        <Button >Enviar Email</Button>
      </form>
    </section>
  )
};

export default LoginRecover;