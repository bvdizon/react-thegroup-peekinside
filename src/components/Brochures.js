import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Card from './Card';
import Loading from './Loading';

const gsheetID = '1z-rXlasV9g2PerZz8uiVtuCEmY192U0LyJA3oWyo9i8';
const gsheetNum = '10';

const url = `https://spreadsheets.google.com/feeds/list/${gsheetID}/${gsheetNum}/public/values?alt=json`;

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
            if (data.gsx$active.$t === 'Yes') {
              return <Card data={data} key={data.gsx$alias.$t} />;
            }
          })}
      </section>
    </main>
  );
};

export default Brochures;
