import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import Home from '../screens/home';
import Categories from '../screens/categories';
import Clients from '../screens/clients';
import Notes from '../screens/notes';
import UpdateNote from '../screens/update-note';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>		
      <Stack.Screen name={ROUTES.HOME} component={Home} />
	  <Stack.Screen name={ROUTES.CATEGORIES} component={Categories} />
	  <Stack.Screen name={ROUTES.CLIENTS} component={Clients} />
	  <Stack.Screen name={ROUTES.NOTES} component={Notes} />
	  <Stack.Screen name={ROUTES.UPDATENOTE} component={UpdateNote} />
    </Stack.Navigator>
  );
};

export default function Navigator() {
  return (
    <NavigationContainer>		
      <StackNavigator />
    </NavigationContainer>
  );
}
