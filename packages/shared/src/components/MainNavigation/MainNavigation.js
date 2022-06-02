import React from 'react';
import Link from '../Link';

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
        {/* TODO: How to handle "internal" links outside a specific app */}
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
