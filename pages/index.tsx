import type { NextPage } from 'next';

import { Hero } from '@/features/home';
import ContentLayout from '@/layout/ContentLayout';

const Home: NextPage = () => {
  return (
    <ContentLayout>
      <Hero />
    </ContentLayout>
  );
};

export default Home;
