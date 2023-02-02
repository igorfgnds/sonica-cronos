import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Welcome from '@/sections/Welcome';
import Learn from '@/sections/Learn';
import Build from '@/sections/Build';
import Explore from '@/sections/Explore';
import Subscribe from '@/sections/Subscribe';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Cronos by Sonica</title>
        <meta name="description" content="Sonica Frontend Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Welcome />
        <Learn />
        <Build />
        <Explore />
        <Subscribe />
      </Layout>
    </>
  );
};

export default Home;
