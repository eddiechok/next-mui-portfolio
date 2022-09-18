import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DEFAULT_LOCALE } from '@/config';
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

export const getStaticProps: GetStaticProps = async ({ locale = DEFAULT_LOCALE }) => {
  const props = await serverSideTranslations(locale, ['common', 'validation']);
  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every hour
    revalidate: 60 * 60, // in seconds
  };
};
