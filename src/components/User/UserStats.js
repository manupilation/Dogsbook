import React, { lazy, useEffect } from 'react'
import { GET_STATS_FETCH } from '../../api';
import useFetch from '../../hooks/useFetch'
import Error from '../Helper/Error';
import Head from '../Helper/Head'
import Loading from '../Helper/Loading';
const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const {data, error, loading, request} = useFetch();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    async function getData() {
      const {url, options} = GET_STATS_FETCH(token);
      await request(url, options);
    }
    getData();
  }, [request, token]);

  if(loading) return <Loading />;
  if(error) return <Error error={error}/>;
  if(data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatísticas" description="Confira suas estatísticas no Little Paws!"/>
      <UserStatsGraphs data={data} />
    </React.Suspense>
  );
  else return null;
}

export default UserStats