import React from 'react';
import Head from 'next/head';
import { Demo } from '../src-demo/components/Demo/Demo';

const App = () => (
  <div className="app">
    <Head>
      <title>Wise Icons</title>
      <meta name="description" content="Wise Icons | SVG Icons for web"></meta>
      <link rel="icon" href="/icons/favicon.png" />
    </Head>
    <Demo />
  </div>
);

export default App;
