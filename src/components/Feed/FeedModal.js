import React, { useEffect } from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET_FETCH } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../PhotoContent/PhotoContent';

const FeedModal = ({photo, setModalPhoto}) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const {url, options} = PHOTO_GET_FETCH(photo.id);
    request(url, options)
  }, []);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    };
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {/* <button className={styles.closeModal}>x</button> */}
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  );
};

export default FeedModal;