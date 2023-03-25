import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PHOTO_POST_FETCH } from '../../api';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import Button from '../Form/Button/Button';
import Input from '../Form/Input/Input';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import style from "./UserPhotoPost.module.css"

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('numberInt');
  const idade = useForm('numberInt');
  const [img, setImg] = useState({});
  const {data, error, loading, request} = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if(data) navigate("/conta");
  }, [data, navigate]);


  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem("token");
    const {url, options} = PHOTO_POST_FETCH(formData, token);
    request(url, options);
  }

  function handleImgChange({target}) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  return (
    <section className={`${style.photoPost} + animeLeft`}>
      <Head title="Poste sua foto" description="Poste suas fotos!"/>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome}/>
        <Input label="Peso" type="number" name="peso" {...peso}/>
        <Input label="Idade" type="number" name="idade" {...idade}/>
        <Input className={style.file} type="file" id="img" name="img" onChange={handleImgChange}/>
        {loading ? <Button disabled>Enviando...</Button>
        : <Button>Enviar</Button>
      }
      <Error error={error}/>
      </form>
      <div>
        {img.preview && <div className={style.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>}
      </div>
    </section>
  )
}

export default UserPhotoPost