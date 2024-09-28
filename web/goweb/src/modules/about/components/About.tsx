import { lazy } from 'react';
import PageContent from '../../shared/components/PageContent';

function About() {
  return (
    <PageContent title="About">
      <div>
        <h2>About</h2>
      </div>
    </PageContent>
  );
}

export default About;
export const AboutPage = lazy(() => import('./About'));
