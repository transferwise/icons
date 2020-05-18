import React from 'react';
import Head from 'next/head';
import { Demo } from '../src-demo/components/Demo/Demo';

const App = () => (
  <div className="app">
    <Head>
      <title>TransferWise Icons</title>
      <meta name="description" content="TransferWise Icons | SVG Icons for web"></meta>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Demo />
  </div>
);

export default App;
