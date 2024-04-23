import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from "./src/pages/Home";
import PlanetPage from './src/pages/Planet';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomePage} options={{ title: 'Solar System Planets' }} />
                <Stack.Screen name='Planet' component={PlanetPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};