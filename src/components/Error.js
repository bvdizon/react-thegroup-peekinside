import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Error = () => {
  return (
    <>
      <Header />
      <main className='container main-content text-center error-page'>
        <h1>Error 404: Page Not Found</h1>
        <div className='underline'></div>
        <p>Please click the button below to check our other listings.</p>
        <Link to='/' className='btn'>
          Home
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Error;
