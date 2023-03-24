import React from 'react';
import { PHOTO_DELETE_FETCH } from '../../api';
import useFetch from '../../hooks/useFetch';
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({id}) => {
  const {loading, request} = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar a foto ?");

    if (confirm) {
      const token = window.localStorage.getItem("token");
  
      const {url, options} = PHOTO_DELETE_FETCH(id, token);
      const {response} = await request(url, options);
  
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {
        loading ? (
        <button
          className={styles.delete}
          disabled
        >
          Deletar
        </button>
        ) : (
        <button
          className={styles.delete}
          id={id}
          onClick={handleClick}
        >
          Deletar
        </button>)
      }

    </>
  );
};

export default PhotoDelete;
