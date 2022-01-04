import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar/NavBar';
import AppContext from '../context/AppContext';

import '../styles/global.scss';
import '../styles/products.scss';
import '../styles/footer.scss';
import '../styles/index.scss';

// components scss
import '../components/navbar/navbar.scss';
import "../components/productPreview/productPreview.scss";
import '../components/banner/Banner.scss';


function CustomApp({Component, pageProps}) {
    return (
      <>
        <Head>
          <title>Streetz</title>
          <link rel="icon" href="./logo.ico" />
          <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
        </Head>
        <AppContext>
          <NavBar />
          <Component {...pageProps} />
        </AppContext>
      </>
    );
}

export default CustomApp
