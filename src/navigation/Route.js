import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../app/HomeScreen';
import { Entypo } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1c422d' },
          headerTintColor: '#d9cdad',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
        }}
      >
        <Stack.Screen
          name='TARIFKA'
          component={HomeScreen}
          options={{
            headerRight: () => (
              <Entypo
                name='star'
                size={25}
                color='gold'
                style={{ paddingRight: 20 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
