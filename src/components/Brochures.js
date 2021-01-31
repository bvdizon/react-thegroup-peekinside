import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Card from './Card';
import Loading from './Loading';

const gsheetID = process.env.REACT_APP_GSHEET_ID;
const gsheetNum = process.env.REACT_APP_GSHEET_NUM;
const gsheetUrl = process.env.REACT_APP_GSHEET_URL;
const url = `${gsheetUrl}/${gsheetID}/${gsheetNum}/public/values?alt=json`;

const Brochures = () => {
  const { loading, data } = useFetch(url);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className='container main-content'>
      <h1>The Group at RE/MAX First &mdash; Listings</h1>
      <div className='underline'></div>

      <section className='thegroup-listings'>
        {data &&
          data.feed.entry.map((data) => {
            return (
              data.gsx$active.$t === 'Yes' && (
                <Card data={data} key={data.gsx$alias.$t} />
              )
            );
          })}
      </section>
    </main>
  );
};

export default Brochures;
