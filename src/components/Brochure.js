import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Loading from './Loading';

const gsheetID = process.env.REACT_APP_GSHEET_ID;
const gsheetNum = process.env.REACT_APP_GSHEET_NUM;
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
