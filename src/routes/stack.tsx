import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { Registration } from '../screens/Registration';
import { ForgetPassword } from '../screens/ForgetPassword';
import { ComplaintsDescription } from '../screens/ComplaintsDescription';
import { Help } from '../screens/Help';
import { TabRoutes } from './tabs';
import { isJwtExpired } from '../utils/validationExp';
import useAsyncStorage from '../hook/useAsyncStorage';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  const [ token ] = useAsyncStorage('@token');
  const navigation = useNavigation();

  useEffect(() => {
    redirectByToken();
  },[token]);

  function redirectByToken() {
    const isValidToken = ((typeof token === 'string') && (token === '' || isJwtExpired(token)));
    navigation.navigate( isValidToken? 'login': 'home');
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={Login} />

      <Stack.Screen name="registration" component={Registration}/>

      <Stack.Screen name="forgetPassword" component={ForgetPassword} />

      <Stack.Screen name="home" component={TabRoutes}/>

      <Stack.Screen
        name="complaintsDescription"
        component={ComplaintsDescription}
        options={{
          headerShown: true,
          title: 'Denúncia',
          headerTintColor: '#FF473A'
        }}
      />
      <Stack.Screen
        name='help'
        component={Help}
        options={{
          headerShown: true,
          title: 'Ajuda',
          headerTintColor: '#FF473A'
        }}
      />
    </Stack.Navigator>
  );
}
