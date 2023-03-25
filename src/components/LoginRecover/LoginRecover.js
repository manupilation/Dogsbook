import React from 'react';
import { PASSWORD_LOST_FETCH } from '../../api';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import Button from '../Form/Button/Button';
import Input from '../Form/Input/Input';
import Error from '../Helper/Error';

const LoginRecover = () => {
  const login = useForm();
  const {data, loading, error, request} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const {url, options} = PASSWORD_LOST_FETCH({login: login.value, url: window.location.href.replace("pedeu", "resetar")});
      const { json } = await request(url, options);
    }

  }

  return (
    <section>
      <h1 className='title'>Perdeu a senha ?</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email/Usuário"
          type="text"
          name="email"
          {...login}
        />
        {loading 
          ? <Button disabled>Enviando...</Button>
          : <Button >Enviar Email</Button>
        }
        <Error error={error}/>
      </form>
    </section>
  )
};

export default LoginRecover;