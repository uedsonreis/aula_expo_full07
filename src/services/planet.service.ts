import { Planet } from "../models/planet";

const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/';

const options: RequestInit = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.EXPO_PUBLIC_API_KEY!,
    },
};

export async function getList() {
    const response = await fetch(url, options);
    const list = await response.json() as Planet[];
    list.sort((a, b) => (a.id - b.id));
    return list;
}

export async function getById(id: number) {
    const response = await fetch(`${url}${id}`, options);
    return await response.json() as Planet;
}
