import React from 'react';
import css from 'styled-jsx/css';

const globalStyles = css.global`
  body {
    color: #444;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0;
  }

  p {
    margin-bottom: 0.5em;
  }

  .content {
    max-width: 1024px;
    padding: 0 1em;
    margin: 0 auto;
  }
`;

export default globalStyles;

export const GlobalStyles = () => {
  return (
    <>
      <style jsx global>{globalStyles}</style>
    </>
  );
}