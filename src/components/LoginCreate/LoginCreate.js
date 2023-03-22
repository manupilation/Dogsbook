import React, { useContext } from 'react';
import Input from '../Form/Input/Input';
import Button from '../Form/Button/Button';
import useForm from "../../hooks/useForm";
import { USER_POST_FETCH } from '../../api';
import { userContext } from '../../UserContext';
import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const { userLogin } = useContext(userContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST_FETCH({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) {
      await userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Usuário"
          type="text"
          name="username"
          {...username}
        />
        <Input 
          label="Email"
          type="text"
          name="email"
          {...email}
        />
        <Input 
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        { loading ? 
        <Button disabled >Cadastrando</Button>
        : <Button>Cadastrar</Button>
      }
      <Error error={error}/>
      </form>
    </section>
  )
};

export default LoginCreate;
