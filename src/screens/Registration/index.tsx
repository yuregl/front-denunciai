import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Container, ImageLogo, Form, InputField, AreaButton } from './styles';
import Logo from '../../assets/denunciai.png';
import { Text } from '../../components/Text';

export function Registration() {
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const [focusName, setFocusName] = useState(false);
  const [focusLastName, setFocusLastName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusConfirmPassword, setFocusConfirmPassword] = useState(false);

  const navigation = useNavigation();

  function backLogin() {
    navigation.goBack();
  }

  return(
    <Container>
      <ImageLogo source={Logo}/>
      <Form>
        <Text size={20} weight="400">Cadastrar</Text>
        <InputField
          isFocused={focusName}
          placeholder='Name'
          style={{backgroundColor: '#FFF'}}
          onChangeText={(e) =>setName(e)}
          value={name}
          onFocus={() => {setFocusName(true);}}
          onBlur={() => {setFocusName(false);}}
        />
        <InputField
          isFocused={focusLastName}
          placeholder='Last Name'
          style={{backgroundColor: '#FFF'}}
          onChangeText={(e) =>setLastName(e)}
          value={lastName}
          onFocus={() => {setFocusLastName(true);}}
          onBlur={() => {setFocusLastName(false);}}
        />
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
          style={{backgroundColor: '#FFF'}}
          onChangeText={(e) =>setPassword(e)}
          secureTextEntry={true}
          value={password}
          onFocus={() => {setFocusPassword(true);}}
          onBlur={() => {setFocusPassword(false);}}
        />
        <InputField
          isFocused={focusConfirmPassword}
          placeholder='Confirm Password'
          style={{backgroundColor: '#FFF'}}
          onChangeText={(e) =>setConfirmPassword(e)}
          secureTextEntry={true}
          value={confirmPassword}
          onFocus={() => {setFocusConfirmPassword(true);}}
          onBlur={() => {setFocusConfirmPassword(false);}}
        />
      </Form>
      <AreaButton>
        <Button onPress={() => alert('Cadastrado')}>Cadastrar</Button>
        <Button onPress={() => backLogin()}>Voltar</Button>
      </AreaButton>
    </Container>
  );
}
