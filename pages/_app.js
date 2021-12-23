import React from 'react'
import Head from 'next/head'

function CustomApp({Component, pageProps}) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    );
}

export default CustomApp
