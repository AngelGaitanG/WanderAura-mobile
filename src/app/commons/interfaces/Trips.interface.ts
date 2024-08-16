export interface TripResponse {
    id: string;
    name: string;
    description: string;
    duration: number;
    price: number;
    status: string;
    accommodations: any[];
    destination: any;
    transport: any[];
    activities: any[];
    image: string;
}
