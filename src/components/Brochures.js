import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
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
            return (
              <article className='thegroup-card' key={data.gsx$alias.$t}>
                <div className='thegroup-card__img'>
                  <img
                    src={data.gsx$thumbnail.$t}
                    alt={`listing brochure - ${data.gsx$property.$t}`}
                  />
                  <div className='thegroup-agent'>
                    <p>
                      {data.gsx$name.$t} <span>{data.gsx$lastname.$t}</span>
                    </p>
                  </div>
                  <div className='remaxfirst-logo'>
                    <img
                      src='/assets/images/remax-first-logo-with-balloon.png'
                      alt=''
                    />
                  </div>
                  <div className='thegroup-card__img--small'>
                    <img src={`/assets/images/${data.gsx$photo.$t}`} alt='' />
                  </div>
                </div>
                <div className='thegroup-card__content'>
                  <h3>{data.gsx$property.$t}</h3>
                  <div className='property-info'>
                    <p>
                      <i className='fa fa-bed'></i>
                      <span>{data.gsx$beds.$t} Beds</span>
                    </p>
                    <p>
                      <i className='fa fa-bath'></i>
                      <span>{data.gsx$baths.$t} Baths</span>
                    </p>
                    <p>
                      <i className='fa fa-arrows-alt'></i>
                      <span>{data.gsx$sqft.$t} Sqft</span>
                    </p>
                    <p>
                      <i className='fa fa-car'></i>
                      <span>{data.gsx$parking.$t} Parking</span>
                    </p>
                  </div>
                  <Link to={`/view/${data.gsx$alias.$t}`} className='btn'>
                    View Brochure
                  </Link>
                </div>
              </article>
            );
          })}
      </section>
    </main>
  );
};

export default Brochures;
