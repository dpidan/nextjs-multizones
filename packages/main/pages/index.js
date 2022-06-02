import { ContentMain, MainNavigation } from '@dpidan/next-multizones-shared-lib';

export default function HomePage() {
  return (
    <div>
      <MainNavigation />
      <ContentMain>
        <h1>Next.js Multi-zone Site</h1>
        <p>[Home] Basic setup with <code>baseBath</code> for the other apps (e.g. Checkout)</p>
      </ContentMain>
    </div>
  );
}
