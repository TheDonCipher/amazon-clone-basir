import Head from 'next/head';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lucello and Shuminski</title>
        <meta name="description" content="Art e-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Lucello and Shuminski
      </Typography>
    </div>
  );
}
