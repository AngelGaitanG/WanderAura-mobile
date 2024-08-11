export interface GeoResponse {
    accuracy: number | null;
    altitude: number | null;
    altitudeAccuracy: number | null | undefined;
    heading: number | null;
    latitude: number;
    longitude: number;
    speed: number | null;
}
