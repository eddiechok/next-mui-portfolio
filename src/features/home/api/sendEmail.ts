import axios from 'axios';

export type SendEmailParams = {
  email: string;
  name?: string;
  subject?: string;
  message: string;
};

export const sendEmail = (values: SendEmailParams) => {
  return axios.post('/api/sendEmail', values);
};
