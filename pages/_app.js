import React from 'react';
import Head from 'next/head';
import AppContext from '../context/AppContext';

// components
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

// pages scss
import '../styles/global.scss';
import '../styles/index.scss';
import '../styles/products.scss';
import '../styles/individualProduct.scss';

// components scss
import '../components/navbar/navbar.scss';
import '../components/footer/footer.scss';
import '../components/subscribe/subscribe.scss';
import '../components/textInput/textinput.scss';
import "../components/productPreview/productPreview.scss";
import '../components/banner/Banner.scss';
import "../components/filterBar/filterbar.scss";
import "../components/productView/productView.scss";
import "../components/optionCont/optioncont.scss";
import "../components/option/option.scss";

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
          <Footer />
        </AppContext>
      </>
    );
}

export default CustomApp
