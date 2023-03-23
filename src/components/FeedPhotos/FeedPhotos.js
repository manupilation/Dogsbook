import React, { useEffect } from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET_FETCH } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({setModalPhoto}) => {
  const {data, loading, error, request} = useFetch();

  useEffect(() => {
    async function fetchFotos() {
      const {url, options} = PHOTOS_GET_FETCH({page: 1, total: 6, user: 0});

      await request(url, options);
    }
    fetchFotos()
  }, [request]);

  if (error) return <Error error={error}/>
  if (loading) return <Loading />
  if (data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>)}
    </ul>
  );
  else return null;
};

export default FeedPhotos;
