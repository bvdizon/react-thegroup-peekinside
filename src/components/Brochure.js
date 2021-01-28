import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Error from './Error';
import Loading from './Loading';

const gsheetID = '1z-rXlasV9g2PerZz8uiVtuCEmY192U0LyJA3oWyo9i8';
const gsheetNum = '10';
const url = `https://spreadsheets.google.com/feeds/list/${gsheetID}/${gsheetNum}/public/values?alt=json`;

const Brochure = () => {
  const { loading, data } = useFetch(url);

  const { alias } = useParams();

  if (loading) {
    return <Loading />;
  }

  if (data) {
    var single = data.feed.entry.find((data) => data.gsx$alias.$t === alias);
  }

  return (
    <main className='brochure-container'>
      {single && (
        <iframe
          src={single.gsx$url.$t}
          frameBorder='0'
          title='71 Hillgrove Drive SE'></iframe>
      )}
    </main>
  );
};

export default Brochure;
