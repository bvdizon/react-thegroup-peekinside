import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <article className='thegroup-card' key={data.gsx$alias.$t}>
      <div className='thegroup-card__img'>
        <Link to={`/view/${data.gsx$alias.$t}`}>
          <img
            src={data.gsx$thumbnail.$t}
            alt={`listing brochure - ${data.gsx$property.$t}`}
          />
        </Link>
        <div className='thegroup-agent'>
          <p>
            {data.gsx$name.$t} <span>{data.gsx$lastname.$t}</span>
          </p>
        </div>
        <div className='remaxfirst-logo'>
          <img src='/assets/images/remax-first-logo-with-balloon.png' alt='' />
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
};

export default Card;
