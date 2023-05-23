import React from 'react';

import Head from 'next/head';

const Seo = () => {
  const seoTitle =
    'SAIGEWARE, A Deep phenotyping platform for personalized healthcare ';
  const seoUrl = `https://saigeware.com`;
  const seoDescription =
    'Deep phenotyping platform for personalized healthcare SAIGEWARE uses population scale datasets and the power of machine learning to stratify risk using non-invasive biomarkers. We help optimize care management by identifying at-risk cohorts, monitor longitudinal changes for improving clinical outcomes and resource utilization.';
  const seoImage = '/images/icons/favicon-512.png';

  return (
    <Head>
      {/* icons links */}

      <link
        rel="icon"
        type="image/png"
        href="/images/icons/favicon-512.png"
        sizes="512x512"
      />
      <link
        rel="shortcut icon"
        href="/images/icons/favicon-16.ico"
        type="image/x-icon"
      ></link>
      <link
        rel="icon"
        type="image/png"
        href="/images/icons/favicon-192.png"
        sizes="192x192"
      />
      <link
        rel="icon"
        type="image/png"
        href="/images/icons/favicon-128.png"
        sizes="128x128"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="/images/icons/favicon-96.ico"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="/images/icons/favicon-32.ico"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="/images/icons/favicon-16.ico"
        sizes="16x16"
      />

      {/* twitter metadata */}
      <meta name="twitter:card" content={seoDescription} />
      <meta name="twitter:site" content={seoUrl} />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content="/images/icons/favicon-512.png" />

      {/* <!-- Facebook / OpenGraph --> */}
      <meta property="og:site_name" content="SAIGEWARE" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content="/images/icons/favicon-512.png" />
      <meta property="og:description" content={seoDescription} />

      <title>{seoTitle}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="/images/icons/favicon-196.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,regular%7CIBM+Plex+Mono:regular"
        media="all"
      />
      <link rel="canonical" href="https://www.SAIGEWARE.com" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="description" content={seoDescription} />
      <meta itemProp="name" content={seoTitle} />
      <meta itemProp="description" content={seoDescription} />
      <meta itemProp="image" content={seoImage} />
      <link rel="mask-icon" href="/favicon.svg" color="#000000" />
    </Head>
  );
};

export default Seo;
