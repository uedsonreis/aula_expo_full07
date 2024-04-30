import AsyncStorage from '@react-native-async-storage/async-storage';

function getPlanetKey(planetId: number) {
    return `@Planets/moon_of_planet_${planetId}`;
}

async function save(planetId: number, moons: string[]) {
    const json = JSON.stringify(moons);
    await AsyncStorage.setItem(getPlanetKey(planetId), json);
}

export async function getList(planetId: number) {
    const json = await AsyncStorage.getItem(getPlanetKey(planetId));
    if (json) {
        return JSON.parse(json) as string[]
    }
    return [] as string[];
}

export async function add(planetId: number, moon: string) {
    const moons = await getList(planetId);
    if (!moons.includes(moon)) moons.push(moon);
    save(planetId, moons);
}

export async function remove(planetId: number, moon: string) {
    let moons = await getList(planetId);
    moons = moons.filter(m => m != moon);
    save(planetId, moons);
}
