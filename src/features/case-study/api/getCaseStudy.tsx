import axios from 'axios';

import { CommonKey } from '@/utils/commonKeys';

export type Page = {
  title_key: CommonKey;
  sections: {
    paragraphs: {
      images: string[];
    }[];
  }[];
};

export const getCaseStudy = () =>
  axios.get<Page[] | undefined>(
    'https://next-mui-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/case_study.json'
  );
