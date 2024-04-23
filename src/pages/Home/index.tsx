import React from 'react';
import { FlatList, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import * as planetService from '../../services/planet.service';
import { Planet } from '../../models/planet';
import styles from './styles';
import ListItem from '../../components/ListItem';

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>();
    const [planets, setPlanets] = React.useState<Planet[]>([])

    async function fetchPlanets() {
        const result = await planetService.getList();
        setPlanets(result);
    }

    React.useEffect(() => {
        fetchPlanets();
    }, []);

    function formatOrder(id: number) {
        if (id === 1) return `${id}st planet from the Sun`;
        if (id === 2) return `${id}nd planet from the Sun`;
        if (id === 3) return `${id}rd planet from the Sun`;
        return `${id}th planet from the Sun`;
    }

    function goToPlanet(id: number) {
        navigation.navigate('Planet', { id });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={planets}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.name}
                        subTitle={formatOrder(item.id)}
                        onPress={() => goToPlanet(item.id)}
                    />
                )}
            />
        </View>
    );
}
