import { lazy } from 'react';
import PageContent from '../../shared/components/PageContent';

function Home() {
  return (
    <PageContent title="Home">
      <span>Home content</span>
    </PageContent>
  );
}

export default Home;
export const HomePage = lazy(() => import('./Home'));
