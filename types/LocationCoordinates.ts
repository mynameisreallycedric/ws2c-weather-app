export interface LocationCoordinates {
    name: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

const locationCoordinates: LocationCoordinates[] = [
    {
        name: "Zurich",
        coordinates: {
            latitude: 52.52,
            longitude: 13.41
        }
    },
    {
        name: "Paris",
        coordinates: {
            latitude: 48.85,
            longitude: 2.35
        }
    },
    {
        name: "New York",
        coordinates: {
            latitude: 40.71,
            longitude: -74.00
        }
    },
    {
        name: "Medellin",
        coordinates: {
            latitude: 6.25,
            longitude: -75.56
        }
    }
];

export default locationCoordinates;