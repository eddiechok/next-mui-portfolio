import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, inputBaseClasses, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SchemaOf } from 'yup';

import { Form } from '@/components/hook-form';
import { ContentSection } from '@/components/ui';
import { Yup } from '@/lib/yup-validation.config';

type FormValues = {
  email: string;
  name?: string;
  subject?: string;
  message: string;
};

const schema: SchemaOf<FormValues> = Yup.object({
  email: Yup.string().required().email(),
  name: Yup.string(),
  subject: Yup.string(),
  message: Yup.string().required(),
});

export const ContactMeSection = () => {
  const { t } = useTranslation();

  const methods = useForm<FormValues>({
    defaultValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log(values);
  };

  return (
    <ContentSection>
      <Typography variant="h1" color="text.primary" fontWeight="bold">
        {t('contact_me')}
      </Typography>
      <Typography color="text.secondary">{t('contact_me_desc')}</Typography>
      <Form methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={6} mt={6}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={6}>
              <Form.TextField name="email" label={t('email')} required />
              <Form.TextField name="name" label={t('name')} />
              <Form.TextField name="subject" label={t('subject')} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form.TextField
              name="message"
              label={t('message')}
              required
              multiline
              minRows={5}
              fullWidth
              sx={{
                height: 1,
                [`.${inputBaseClasses.root}`]: {
                  height: 1,
                  alignItems: 'flex-start',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" size="large" sx={{ display: 'block', ml: 'auto' }}>
              {t('send')}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </ContentSection>
  );
};
