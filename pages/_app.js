import React from 'react';
import Head from 'next/head';
import AppContext from '../context/AppContext';

// components
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';

// pages scss
import '../styles/global.scss';
import '../styles/index.scss';
import '../styles/products.scss';
import '../styles/individualProduct.scss';
import '../styles/checkout.scss';

// components scss
import '../components/navbar/navbar.scss';
import '../components/footer/footer.scss';
import '../components/subscribe/subscribe.scss';
import '../components/textInput/textinput.scss';
import "../components/productPreview/productPreview.scss";
import '../components/banner/Banner.scss';
import "../components/filterBar/filterbar.scss";
import "../components/product/product.scss";
import "../components/optionCont/optioncont.scss";
import "../components/option/option.scss";
import "../components/browseDropdown/browsedropdown.scss";
import '../components/cart/cart.scss';
import "../components/breadcrumb/breadcrumb.scss";
import "../components/checkoutAccordion/checkoutAccordion.scss";
import "../components/checkoutSummary/checkoutSummary.scss";
import "../components/checkoutItem/checkoutItem.scss";
import "../components/menu/menu.scss";
import '../components/searchBar/searchbar.scss';
import '../components/loader/loader.scss';
import '../components/searchBar/searchbar.scss';
import '../components/accordian/accordiandropdown.scss';
import '../components/modal/modal.scss';
import '../components/disclaimer/sitedisclaimer.scss';
import '../components/pageChanger/pagechanger.scss';

import Modal from '../components/modal/Modal';

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Streetz</title>
        <link rel="icon" href="./logo.ico" />
        <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
      </Head>
      <AppContext>
        <Modal />
        <Loader />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </AppContext>
    </>
  );
}

export default CustomApp


export async function getStaticProps() {
      await dbConnect()
      const products = await getProducts()  
      // const brands = await Product.collection.distinct('brand')
      // console.log(brands)
      // server side rendering
      return {
        props: {
          products: JSON.parse(JSON.stringify(products))
        }, // will be passed to the page component as props
      }
    }