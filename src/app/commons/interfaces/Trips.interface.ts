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
    start_date: string;
    end_date: string;
}

export interface MyTripResponse {
    currentTrip?: TripResponse & {bookingId: string, currentDay: number, totalDays: number, status: string};
    pastTrips?: (TripResponse & {bookingId: string, status: string})[];
    upcomingTrips?: (TripResponse & {bookingId: string, status: string})[];
}