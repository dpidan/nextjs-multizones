import { globalStyles } from '@dpidan/next-multizones-shared-lib';

export default function MainApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{globalStyles}</style>
      <Component {...pageProps} />
    </>
  );
}
