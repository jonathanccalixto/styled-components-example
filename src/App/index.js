import React, {useCallback, useState} from 'react';

import {Input} from '../components/Input';

import {Container, Title, Subtitle, Form, Button, ButtonLabel} from './styles';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = useCallback(
    newEmail => {
      console.log({email, newEmail});
      setEmail(newEmail);
    },
    [email],
  );

  console.log({email});
  const handleChangePassword = useCallback(newPassword => {
    setPassword(newPassword);
  }, []);

  const handleSignIn = useCallback(() => {
    console.log('Sign In with', {email, password});
  }, [email, password]);

  return (
    <Container>
      <Title>Usando styled components</Title>
      <Subtitle>no React Native</Subtitle>

      <Form>
        <Input label="Email" value={email} onChangeText={handleChangeEmail} />
        <Input
          secureTextEntry
          required
          label="Senha"
          value={password}
          onChangeText={handleChangePassword}
        />
        <Button onPress={handleSignIn}>
          <ButtonLabel>Logar</ButtonLabel>
        </Button>
      </Form>
    </Container>
  );
};

export default App;
