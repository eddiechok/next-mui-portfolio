import type { NextPage } from 'next';

import {
  AboutSection,
  ContactMeSection,
  HeroSection,
  SkillSection,
  WorkSection,
} from '@/features/home';
import ContentLayout from '@/layout/ContentLayout';
import '@/utils/validationKeys';

const Home: NextPage = () => {
  return (
    <ContentLayout>
      <HeroSection />
      <WorkSection />
      <SkillSection />
      <AboutSection />
      <ContactMeSection />
    </ContentLayout>
  );
};

export default Home;
