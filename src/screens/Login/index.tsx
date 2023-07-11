import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../../components/Text';

import {
  Container,
  ImageLogin,
  Form,
  InputField,
  AreaButton,
  AreaForgetPassword,
  ForgetPasswordButton
} from './styles';
import Logo from '../../assets/denunciai.png';
import { Button } from '../../components/Button';
import useAsyncStorage from '../../hook/useAsyncStorage';

export function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [focusEmail, setFocusEmail] = useState<boolean>(false);
  const [focusPassword, setFocusPassword] = useState<boolean>(false);
  const [  ,setValueAsync] = useAsyncStorage('@token');

  function toChangeRegistrationRoute() {
    navigation.navigate('registration');
  }

  function toChangeForgetPassword() {
    navigation.navigate('forgetPassword');
  }

  async function handleLogin() {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRlNjliYTQzLTk5ODEtNDk0Zi1iYmIwLWFlNWNhODBiZDE1MyIsImlhdCI6MTY3NDYwMjIwMiwiZXhwIjoxNjc0Njg4NjAyfQ.ZRrb5FHSSYHD_DVGNHqml6FYhwx6sfL_6Fw1-luIXd8';
    await setValueAsync(token);
    navigation.navigate('home');
  }
  return(
    <Container>
      <ImageLogin source={Logo}/>
      <Form>
        <InputField
          isFocused={focusEmail}
          placeholder='Email'
          style={{backgroundColor: '#FFF'}}
          keyboardType="email-address"
          onChangeText={(e) =>setEmail(e)}
          value={email}
          onFocus={() => {setFocusEmail(true);}}
          onBlur={() => {setFocusEmail(false);}}
        />
        <InputField
          isFocused={focusPassword}
          placeholder='Password'
          style= {{backgroundColor: '#FFF'}}
          keyboardType = "email-address"
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
          value={password}
          onFocus={() => {setFocusPassword(true);}}
          onBlur={() => {setFocusPassword(false);}}
        />
      </Form>
      <AreaForgetPassword>
        <ForgetPasswordButton
          onPress={() => toChangeForgetPassword()}
        >
          <Text>Esqueceu sua senha?</Text>
        </ForgetPasswordButton>
      </AreaForgetPassword>
      <AreaButton>
        <Button onPress={() => handleLogin()}>Entrar</Button>
        <Button onPress={() => toChangeRegistrationRoute()}>Cadastra-se</Button>
      </AreaButton>
    </Container>
  );
}
