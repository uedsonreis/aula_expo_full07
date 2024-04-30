import React from 'react';
import { FlatList, Button, TextInput, View, Alert } from "react-native";

import * as moonService from '../../services/moon.service';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import ListItem from '../../components/ListItem';

export default function MoonPage() {

    const route = useRoute();
    const navigation = useNavigation();
    const { planet } = route.params as any;

    const [moon, setMoon] = React.useState('');
    const [moons, setMoons] = React.useState<string[]>([]);

    React.useEffect(() => {
        fetchMoons();
        navigation.setOptions({ title: `Moons of ${planet.name}` });
    }, [planet]);

    async function fetchMoons() {
        const result = await moonService.getList(planet.id);
        setMoons(result);
    }

    async function saveMoon() {
        const { planetId } = route.params as any;
        await moonService.add(planetId, moon);
        setMoon('');
        fetchMoons();
    }

    return (
        <View>
            <View style={styles.inputView}>
                <TextInput style={styles.input} value={moon} onChangeText={setMoon} />
                <Button title="Add" onPress={saveMoon} />
            </View>
            <FlatList
                data={moons}
                renderItem={({ item }) => (
                    <ListItem title={item} />
                )}
            />
        </View>
    )
}