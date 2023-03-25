import React, { useState } from 'react';
import { COMMENT_POST_FETCH } from '../../api';
import {ReactComponent as Enviar} from "../../Assets/enviar.svg";
import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({id, setComments, single}) => {
  const [comment, setComment] = useState("");
  const {request, error} = useFetch();
  const token = window.localStorage.getItem('token');

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = COMMENT_POST_FETCH(id, {comment}, token);
    const {response, json} = await request(url, options);

    if (response.ok === true) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${single ? styles.single : ""}`}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({target}) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;