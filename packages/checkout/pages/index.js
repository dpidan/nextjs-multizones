import { ContentMain, Link, MainNavigation } from '@dpidan/next-multizones-shared-lib';

export default function CheckoutPage() {
  return (
    <>
      <MainNavigation>
        {' / '}
        <Link href="/checkout/shipping">
          <a>Shipping page</a>
        </Link>
      </MainNavigation>
      <ContentMain>
        <h1>Checkout</h1>
        <p>[Checkout root] Basic setup with <code>baseBath</code> for the other apps</p>
      </ContentMain>
    </>
  );
}
