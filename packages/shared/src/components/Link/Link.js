import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export default function Link({ children, href, ...rest }) {
  const { basePath = '' } = useRouter();

  // Strip the Next.js `basePath` from the href
  // TODO: how to handle objects?
  let appHref = `${href}`;
  if (appHref === basePath) {
    appHref = '/'
  } else if (appHref.startsWith(basePath)) {
    appHref = appHref.slice(basePath.length)
  } else {
    appHref = `..${appHref}`
  }

  return (
    <NextLink {...rest} href={appHref}>
      {children}
    </NextLink>
  );
}
