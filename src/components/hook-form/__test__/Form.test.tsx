import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/hook-form/Form';
import { Yup } from '@/lib/yup-validation';
import { rtlRender, userEvent, screen } from '@/test/test-utils';

const schema = Yup.object({
  test: Yup.string().required('required'),
});

const TestForm = () => {
  const methods = useForm({
    defaultValues: {
      test: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log('on submit');
  };

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Form.TextField name="test" required />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

describe('Form', () => {
  const setup = () => {
    rtlRender(<TestForm />);
  };

  it('should show error message', async () => {
    setup();
    await userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/required/)).toBeVisible();
  });
});
