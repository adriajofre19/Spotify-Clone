import { colors } from "./colors";

export interface Playlist {
    id: string;
    albumId: number;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artists: string[];
}

export const playlists: Playlist[] = [
    {
        id: '1',
        albumId: 1,
        title: "This is Manolo Garcia",
        color: colors.yellow,
        cover:"https://phantom-elmundo.unidadeditorial.es/35542c5b1e0f4b62ed6e34dbe7de6059/resize/414/f/jpg/assets/multimedia/imagenes/2019/04/25/15562173554752.jpg",
        artists: ["Manolo Garcia"],
    },
    {
        id: '2',
        albumId: 2,
        title: "Lo-Fi Chill Session",
        color: colors.green,
        cover:"https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
        artists: ["Kupla", "Blue Fox"],
    },
    {
        id: '3',
        albumId: 3,
        title: "Study Session",
        color: colors.rose,
        cover:"https://f4.bcbits.com/img/a1435058381_65.jpg",
        artists: ["Tenno", "xander", "Team Astro"],
    },
    {
        id: '4',
        albumId: 4,
        title: "Blue Note Study Time",
        color: colors.blue,
        cover:"https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Raimu", "Yasumu"],
    },
    {
        id: '5',
        albumId: 5,
        title: "Chau Saura Session",
        color: colors.purple,
        cover:"https://f4.bcbits.com/img/a2793859494_16.jpg",
        artists: ["Chau Saura", "amies", "kyu"],
    },
    {
        id: '6',
        albumId: 6,
        title: "Like a Necessity",
        color: colors.orange,
        cover:"https://f4.bcbits.com/img/a0363730459_16.jpg",
        artists: ["WFS", "Nadav Cohen"],
    },
];

export const morePlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
}))

export const allPlaylists = [
    ...playlists,
    ...morePlaylists,
    ...sidebarPlaylists,
]

export interface Song {
    id: number;
    albumId: number;
    title: string;
    image: string;
    artists: string[];
    album: string;
    duration: string;
}

export const songs: Song[] = [
    {
        "id": 1,
        "albumId": 1,
        "title": "A San Fernando",
        "image": `https://i.scdn.co/image/ab67616d0000b273088ac62bb5a78a91e7d4c6dc`,
        "artists": ["Manolo Garcia"],
        "album": "Manolo Garcia",
        "duration": "2:57"
    },
    {
        "id": 2,
        "albumId": 1,
        "title": "Pajaros de Barro",
        "image": `https://i.scdn.co/image/ab67616d0000b273088ac62bb5a78a91e7d4c6dc`,
        "artists": ["Manolo Garcia"],
        "album": "Manolo Garcia",
        "duration": "3:59"
    },
    {
        "id": 3,
        "albumId": 1,
        "title": "Nunca El Tiempo es Perdido",
        "image": `https://i.scdn.co/image/ab67616d00001e02751551d5ab31d334f8c7f7b6`,
        "artists": ["Manolo Garcia"],
        "album": "Manolo Garcia",
        "duration": "3:29"
    },
    {
        "id": 4,
        "albumId": 1,
        "title": "Carbon y Ramas Secas",
        "image": `https://i.scdn.co/image/ab67616d0000b273088ac62bb5a78a91e7d4c6dc`,
        "artists": ["Manolo Garcia"],
        "album": "Manolo Garcia",
        "duration": "2:11"
    },
    {
        "id": 5,
        "albumId": 1,
        "title": "Suave",
        "image": `https://i.scdn.co/image/ab67616d00001e02751551d5ab31d334f8c7f7b6`,
        "artists": ["Manolo Garcia"],
        "album": "Manolo Garcia",
        "duration": "2:26"
    },
    {
        "id": 6,
        "albumId": 2,
        "title": "Silent Rain",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "2:38"
    },
    {
        "id": 7,
        "albumId": 2,
        "title": "Lost Pages",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "2:40"
    },
    {
        "id": 8,
        "albumId": 2,
        "title": "Midnight Tales",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "2:53"
    },
    {
        "id": 9,
        "albumId": 2,
        "title": "City Lights",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:11"
    },
    {
        "id": 10,
        "albumId": 2,
        "title": "Night Drive",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "2:58"
    },
    {
        "id": 11,
        "albumId": 3,
        "title": "Lunar",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:06"
    },
    {
        "id": 12,
        "albumId": 3,
        "title": "Go go go!",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "1:30"
    },
    {
        "id": 13,
        "albumId": 3,
        "title": "Keep focus!",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "1:59"
    },
    {
        "id": 14,
        "albumId": 3,
        "title": "JavaScript is the way",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:56"
    },
    {
        "id": 15,
        "albumId": 3,
        "title": "No more TypeScript for me",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:30"
    },
    {
        "id": 16,
        "albumId": 4,
        "title": "Lunar",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:59"
    },
    {
        "id": 17,
        "albumId": 4,
        "title": "Go go go!",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:12"
    },
    {
        "id": 18,
        "albumId": 4,
        "title": "Keep focus!",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:02"
    },
    {
        "id": 19,
        "albumId": 4,
        "title": "JavaScript is the way",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:29"
    },
    {
        "id": 20,
        "albumId": 4,
        "title": "No more TypeScript for me",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:29"
    },
    {
        "id": 21,
        "albumId": 5,
        "title": "Moonlit Walk",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Manolo Garcia",
        "duration": "3:49"
    },
    {
        "id": 22,
        "albumId": 5,
        "title": "Coffee Daze",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Manolo Garcia",
        "duration": "1:52"
    },
    {
        "id": 23,
        "albumId": 5,
        "title": "Skyline Serenade",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Manolo Garcia",
        "duration": "2:15"
    },
    {
        "id": 24,
        "albumId": 5,
        "title": "Urban Echoes",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Manolo Garcia",
        "duration": "4:06"
    },
    {
        "id": 25,
        "albumId": 5,
        "title": "Night's End",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Manolo Garcia",
        "duration": "2:54"
    },
]