import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';

import { getById } from '../../services/planet.service';
import { Planet } from '../../models/planet';
import styles from './styles';

export default function PlanetPage() {

    const route = useRoute();
    const navigation = useNavigation<NavigationProp<any>>();
    const [planet, setPlanet] = React.useState<Planet>();

    navigation.setOptions({
        headerRight: () => <Button title="Moons" onPress={goToMoonPage} />
    });

    function goToMoonPage() {
        navigation.navigate('Moon', { planet });
    }

    async function fetchPlanet() {
        const { id } = route.params as any;
        const result = await getById(id);
        setPlanet(result);
        navigation.setOptions({ title: result?.name });
    }

    React.useEffect(() => {
        fetchPlanet();
    }, [route.params]);

    if (!planet) return <Text>Loading...</Text>;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: planet.imgSrc.img }} />
            <Text style={styles.text}>{planet.description}</Text>
            <Text style={styles.text}>Volume: {planet.basicDetails.volume}</Text>
            <Text style={styles.text}>Mass: {planet.basicDetails.mass}</Text>
        </View>
    )
}