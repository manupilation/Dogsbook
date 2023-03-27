import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET_POST } from '../../constants/Endpoints';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import Button from '../Form/Button/Button';
import Input from '../Form/Input/Input';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const {request, error, loading } = useFetch()
  const password = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const keyP = params.get("key")
    const loginP = params.get("login");

    if(keyP) {
      setKey(key)
    }
    if(loginP) {
      setLogin(loginP)
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const {url, options} = PASSWORD_RESET_POST({
        login,
        key,
        password: password.value,
      });
  
      const {response} = await request(url, options);
  
      if(response.ok) navigate('/login');
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Redefinir a senha"/>
      <h1 className='title'>Redefinir a senha:</h1>
      <form onSubmit={handleSubmit}>
        {key}
        {login}
        <Input
          label="Nova senha:"
          type="password"
          name="password"
          {...password}
        />
      </form>
      {
        loading ? <Button disabled>Redefinindo...</Button>
        : <Button>Redefinir</Button>
      }
      <Error error={error}/>
    </section>
  )
};

export default LoginReset;