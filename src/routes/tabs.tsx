import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home/';
import { NewComplaint } from '../screens/NewComplaint';
import { Configuration } from '../screens/Configurations';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function TabRoutes() {

  return(
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EEE'
        },
        tabBarStyle: {
          backgroundColor: '#EEE'
        },
        headerTintColor: '#FF473A',
        tabBarActiveTintColor: '#FF473A',
        tabBarInactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name="homeTab" component={Home}
        options={{
          title: 'Visualizar Denúncias',
          tabBarIcon: ({focused ,color}) => (
            <Entypo name='megaphone' color={color} size={ focused === true ? 24 : 20}/>
          )
        }}
      />
      <Tab.Screen name='newComplaint' component={NewComplaint}
        options={{
          title: 'Nova Denúncia',
          tabBarIcon: ({focused ,color}) => (
            <Entypo name='circle-with-plus' color={color} size={ focused === true ? 24 : 20}/>
          )
        }}
      />
      <Tab.Screen name="menu" component={Configuration}
        options={{
          title: 'Menu',
          tabBarIcon: ({focused ,color}) => (
            <Entypo name='menu' color={color} size={ focused === true ? 24 : 20}/>
          )
        }}
      />
    </Tab.Navigator>
  );
}
