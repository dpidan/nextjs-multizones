import Link from 'next/link';
import { ContentMain, MainNavigation } from '@dpidan/next-multizones-shared-lib';

export default function ShippingPage() {
  return (
    <div>
      <MainNavigation>
        {' / '}
        <Link href="/">
          <a>Checkout root</a>
        </Link>
      </MainNavigation>
      <ContentMain>
        <h1>Checkout -&gt; Shipping Page</h1>
        <p>[Checkout Shipping] Basic setup with <code>baseBath</code> for the other apps.</p>
      </ContentMain>
    </div>
  );
}