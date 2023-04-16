import { Form, Label, Input, Button } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { authUserLogin } from 'redux/auth/operations';
import { Header } from 'components/ContactForm/ContactForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(authUserLogin({ email, password }));

    form.reset();
  };

  return (
    <>
      <Header>Login</Header>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
};
