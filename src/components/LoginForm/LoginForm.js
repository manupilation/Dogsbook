import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { userContext } from '../../UserContext';
import Button from '../Form/Button/Button';
import Input from '../Form/Input/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm('password');
  const {userLogin} = useContext(userContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <div>LoginForm
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <Button 
          disabled={
            !(username.value.length > 2 &&
            password.value.length > 2)
          }
          type="submit"
        >
          ENTRAR
        </Button>
      </form>

      <Link to="/login/create">Cadastro</Link>
    </div>
  )
};

export default LoginForm;
