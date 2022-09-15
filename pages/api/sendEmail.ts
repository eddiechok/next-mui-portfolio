import { NextApiHandler } from 'next';
import mailjet from 'node-mailjet';

import { SendEmailParams } from '@/features/home';

const mailService = mailjet.apiConnect(
  process.env.MAILJET_API_KEY || '',
  process.env.MAILJET_SECRET_KEY || ''
);

const handler: NextApiHandler = (req, res) => {
  if (req.method === 'POST') {
    const data = req.body as SendEmailParams;

    const request = mailService.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'eddiechok96@gmail.com',
            Name: 'Eddie Chok',
          },
          To: [
            {
              Email: 'eddiechok96@gmail.com',
              Name: 'Eddie Chok',
            },
          ],
          Subject: data.subject,
          TextPart: `${data.email}${data.name ? ` (${data.name})` : ''}\n\n${data.message}`,
          CustomID: 'next-mui-portfolio',
        },
      ],
    });
    request
      .then(() => {
        res.status(200).json({ message: 'success' });
      })
      .catch((err) => {
        res.status(err.statusCode).json({ message: 'error' });
      });
  }
};

export default handler;
