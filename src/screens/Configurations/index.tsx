import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../../components/Button';
import { Container } from './styles';

export function Configuration() {
  const navigation = useNavigation();

  async function handleLogout() {
    await AsyncStorage.removeItem('@token');
    navigation.reset({
      index: 0,
      routes: [{name: 'login'}]
    });
  }

  function goToHelp(){
    navigation.navigate('help');
  }
  return(
    <Container>
      <Button onPress={() => goToHelp()}>
        Ajuda
      </Button>
      <Button onPress={() => handleLogout()}>
        Sair
      </Button>
    </Container>
  );
}
