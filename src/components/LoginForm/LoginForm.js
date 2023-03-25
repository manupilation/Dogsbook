import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { userContext } from '../../UserContext';
import Button from '../Form/Button/Button';
import Input from '../Form/Input/Input';
import Error from '../Helper/Error';
import style from "./LoginForm.module.css"

import styleBtn from '../Form/Button/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm('password');
  const {
    userLogin,
    error,
    loading,
  } = useContext(userContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Login" description="Entre ou cadastre-se já!"/>
      <h1 className='title'>Login</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <Input
          label="Usuário"
          type="text"
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          {...password}
        />
        {loading ? <Button disabled>Carregando...</Button> : <Button 
          disabled={
            !(username.value.length > 2 &&
            password.value.length > 2)
          }
          type="submit"
        >
          ENTRAR
        </Button>}
        <Error error={error} />
      </form>
      <Link to="/login/recover" className={style.perdeu}>Esqueceu a senha?</Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta ? Cadastre-se no site.</p>
      </div>
      <Link className={styleBtn.button} to="/login/create">Cadastro</Link>
    </section>
  )
};

export default LoginForm;
