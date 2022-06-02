import React from 'react';
import NextLink from 'next/link';

// TODO: get from dotenv/config
const siteRoot = `//localhost:3000`;

export const Link = ({ href, children, ...rest }) => {
  let host;
  let hrefFull = `${href}`;
 
  if (typeof window !== 'undefined') {
    host = window.location.host;
  } else {
    host = 'localhost:3000';
  }

  console.log(process.env);

  if (!hrefFull.startsWith('http')) {
    hrefFull = `${host}/${href}`;
  }

  return <NextLink {...rest} href={hrefFull}>{children}</NextLink>;
};

// TODO: how to handle links across apps without needing full URL?
export default function MainNavigation({ children }) {

  return (
    <>
      <style jsx global>
        {`
          .main-navigation {
            background-color: #eeeee5;
            font-size: 14px;
            margin: 0 auto;
            max-width: 1024px;
            padding: 0 1em;
          }

          .main-navigation a {
            color: #49d;
            display: inline-block;
            padding: 5px;
          }
        `}
      </style>
      <div className="main-navigation">
        {/* TODO: How to handle "internal" links outside this app */}
        <Link href="/">
          <a>Home</a>
        </Link>
        {' / '}
        {/* TODO: ensure this doesn't do a full page load instead of SPA-navigation within checkout app */}
        <Link href="/checkout">
          <a>Checkout</a>
        </Link>
        {children}
      </div>
    </>
  )
}
