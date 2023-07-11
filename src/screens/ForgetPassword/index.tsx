import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/denunciai.png';
import { Button } from '../../components/Button';

import {
  Container,
  ImageLogin,
  Form,
  AreaButton,
  InputField
} from './styles';
import { Text } from '../../components/Text';

export function ForgetPassword() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  const [focusEmail, setFocusEmail] = useState(false);

  function backLogin() {
    navigation.goBack();
  }

  return (
    <Container>
      <ImageLogin source={Logo}/>
      <Form>
        <Text
          size={22}
          weight="400"
        >
          Recuperar senha
        </Text>
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
      </Form>
      <AreaButton>
        <Button onPress={() => alert('Enviado')}>Enviar</Button>
        <Button onPress={() => backLogin()}>Voltar</Button>
      </AreaButton>
    </Container>
  );
}
