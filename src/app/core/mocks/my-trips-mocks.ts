export const MY_TRIPS = {
	"currentTrip": {
		"id": "79269b3f-b774-4a99-86dc-8682bbfaebdd",
		"name": "Paseo por la ciudad de París",
		"description": "Descubre la ciudad de la luz, visitando monumentos y lugares emblemáticos como la Torre Eiffel y el Louvre.",
		"duration": 9,
		"price": 3000,
		"status": "in_progress",
		"image": "https://picsum.photos/1000/700",
		"start_date": "2024-08-30T00:00:00.000Z",
		"end_date": "2024-09-08T00:00:00.000Z",
		"bookingId": "8a5806ce-06a9-4256-aecb-1ee145a87af1",
		"currentDay": 2,
		"totalDays": 10
	},
	"pastTrips": [
		{
			"id": "b1a60b5e-3f3d-4a4e-8c13-3b9f5a731f25",
			"name": "Aventura en la Amazonía",
			"description": "Explora la selva amazónica y descubre su biodiversidad única.",
			"duration": 12,
			"price": 4500,
			"status": "completed",
			"image": "https://picsum.photos/800/600",
			"start_date": "2024-07-01T00:00:00.000Z",
			"end_date": "2024-07-13T00:00:00.000Z",
			"bookingId": "3b0737f3-4677-4b78-b15b-343e5ec178f9"
		},
		{
			"id": "c57e71e3-4b61-4dc1-bcc5-e75e2e1c9b89",
			"name": "Safari en el Serengeti",
			"description": "Vive la experiencia de un safari y observa a los grandes felinos en su hábitat natural.",
			"duration": 10,
			"price": 5200,
			"status": "completed",
			"image": "https://picsum.photos/700/500",
			"start_date": "2024-06-01T00:00:00.000Z",
			"end_date": "2024-06-10T00:00:00.000Z",
			"bookingId": "a16d97d3-b0b8-48a9-9b5c-1e7462b5a8a6"
		},
		{
			"id": "23f9e938-e5a1-4705-a9e8-74121b84d5eb",
			"name": "Recorrido por las Islas Griegas",
			"description": "Navega por el mar Egeo y visita las islas más icónicas de Grecia.",
			"duration": 14,
			"price": 6000,
			"status": "completed",
			"image": "https://picsum.photos/700/400",
			"start_date": "2024-05-01T00:00:00.000Z",
			"end_date": "2024-05-15T00:00:00.000Z",
			"bookingId": "5a6f4b39-3ad1-42d1-a9f2-56e536d8eec1"
		}
	],
	"upcomingTrips": [
		{
			"id": "e50ca3b4-bdd1-4bdd-9a64-1b9a57cdfcb2",
			"name": "Visita a las Pirámides de Egipto",
			"description": "Un viaje inolvidable a través de la historia antigua de Egipto.",
			"duration": 7,
			"price": 3200,
			"status": "upcoming",
			"image": "https://picsum.photos/600/400",
			"start_date": "2024-09-15T00:00:00.000Z",
			"end_date": "2024-09-22T00:00:00.000Z",
			"bookingId": "61709c75-e62c-4ded-b5ac-c83ebb382c9e"
		},
		{
			"id": "946c462c-64fd-46f3-89da-d61433f81838",
			"name": "Excursión a la Patagonia",
			"description": "Explora los glaciares y montañas de la Patagonia.",
			"duration": 10,
			"price": 4000,
			"status": "upcoming",
			"image": "https://picsum.photos/500/300",
			"start_date": "2024-10-01T00:00:00.000Z",
			"end_date": "2024-10-11T00:00:00.000Z",
			"bookingId": "1d3b879b-dedf-4f63-982c-c011cd597cad"
		},
		{
			"id": "a1b83f84-54d9-4e9c-b1c5-bfc83a1f3a54",
			"name": "Tour de la Toscana",
			"description": "Recorre los viñedos y paisajes de la Toscana, disfrutando del vino y la gastronomía local.",
			"duration": 6,
			"price": 3800,
			"status": "upcoming",
			"image": "https://picsum.photos/600/400",
			"start_date": "2024-10-15T00:00:00.000Z",
			"end_date": "2024-10-21T00:00:00.000Z",
			"bookingId": "5c0d6d64-c594-45a7-97f6-5588f8c3c204"
		},
		{
			"id": "5d3c89d2-5a0f-4c14-81ab-9b5eab4d97b4",
			"name": "Viaje a las Montañas Rocosas",
			"description": "Disfruta de la naturaleza y las actividades al aire libre en las Montañas Rocosas.",
			"duration": 8,
			"price": 4200,
			"status": "upcoming",
			"image": "https://picsum.photos/600/450",
			"start_date": "2024-11-01T00:00:00.000Z",
			"end_date": "2024-11-09T00:00:00.000Z",
			"bookingId": "6bfa8a63-bc7e-4a2e-bd2e-0d28e2ab5d07"
		}
	]
}


export const MY_TRIPS_MIXED = [
    {
        "id": "79269b3f-b774-4a99-86dc-8682bbfaebdd",
        "name": "Paseo por la ciudad de París",
        "description": "Descubre la ciudad de la luz, visitando monumentos y lugares emblemáticos como la Torre Eiffel y el Louvre.",
        "duration": 9,
        "price": 3000,
        "status": "in_progress",
        "image": "https://picsum.photos/1000/700",
        "start_date": "2024-08-30T00:00:00.000Z",
        "end_date": "2024-09-08T00:00:00.000Z",
        "bookingId": "8a5806ce-06a9-4256-aecb-1ee145a87af1",
        "currentDay": 2,
        "totalDays": 10,
        "destination": { "name": "París, Francia" },
        "accommodation": "Hotel 4 estrellas",
        "transport": [
            { "type": "avión" },
            { "type": "metro" }
        ],
        "activities": [
            { "name": "Visita a la Torre Eiffel" },
            { "name": "Paseo por el Louvre" }
        ]
    },
    {
        "id": "b1a60b5e-3f3d-4a4e-8c13-3b9f5a731f25",
        "name": "Aventura en la Amazonía",
        "description": "Explora la selva amazónica y descubre su biodiversidad única.",
        "duration": 12,
        "price": 4500,
        "status": "completed",
        "image": "https://picsum.photos/800/600",
        "start_date": "2024-07-01T00:00:00.000Z",
        "end_date": "2024-07-13T00:00:00.000Z",
        "bookingId": "3b0737f3-4677-4b78-b15b-343e5ec178f9",
        "destination": { "name": "Amazonas, Brasil" },
        "accommodation": "Eco-lodge",
        "transport": [
            { "type": "avión" },
            { "type": "barco" }
        ],
        "activities": [
            { "name": "Safari fotográfico" },
            { "name": "Observación de aves" }
        ]
    },
    {
        "id": "c57e71e3-4b61-4dc1-bcc5-e75e2e1c9b89",
        "name": "Safari en el Serengeti",
        "description": "Vive la experiencia de un safari y observa a los grandes felinos en su hábitat natural.",
        "duration": 10,
        "price": 5200,
        "status": "completed",
        "image": "https://picsum.photos/700/500",
        "start_date": "2024-06-01T00:00:00.000Z",
        "end_date": "2024-06-10T00:00:00.000Z",
        "bookingId": "a16d97d3-b0b8-48a9-9b5c-1e7462b5a8a6",
        "destination": { "name": "Serengeti, Tanzania" },
        "accommodation": "Campamento de lujo",
        "transport": [
            { "type": "avión" },
            { "type": "jeep" }
        ],
        "activities": [
            { "name": "Safari al amanecer" },
            { "name": "Visita a tribus locales" }
        ]
    },
    {
        "id": "23f9e938-e5a1-4705-a9e8-74121b84d5eb",
        "name": "Recorrido por las Islas Griegas",
        "description": "Navega por el mar Egeo y visita las islas más icónicas de Grecia.",
        "duration": 14,
        "price": 6000,
        "status": "completed",
        "image": "https://picsum.photos/700/400",
        "start_date": "2024-05-01T00:00:00.000Z",
        "end_date": "2024-05-15T00:00:00.000Z",
        "bookingId": "5a6f4b39-3ad1-42d1-a9f2-56e536d8eec1",
        "destination": { "name": "Islas Griegas" },
        "accommodation": "Crucero de lujo",
        "transport": [
            { "type": "barco" },
            { "type": "helicóptero" }
        ],
        "activities": [
            { "name": "Visita a Santorini" },
            { "name": "Tour por Mykonos" }
        ]
    },
    {
        "id": "e50ca3b4-bdd1-4bdd-9a64-1b9a57cdfcb2",
        "name": "Visita a las Pirámides de Egipto",
        "description": "Un viaje inolvidable a través de la historia antigua de Egipto.",
        "duration": 7,
        "price": 3200,
        "status": "upcoming",
        "image": "https://picsum.photos/600/400",
        "start_date": "2024-09-15T00:00:00.000Z",
        "end_date": "2024-09-22T00:00:00.000Z",
        "bookingId": "61709c75-e62c-4ded-b5ac-c83ebb382c9e",
        "destination": { "name": "El Cairo, Egipto" },
        "accommodation": "Hotel 5 estrellas",
        "transport": [
            { "type": "avión" },
            { "type": "bus turístico" }
        ],
        "activities": [
            { "name": "Tour por las pirámides" },
            { "name": "Visita al Museo Egipcio" }
        ]
    },
    {
        "id": "946c462c-64fd-46f3-89da-d61433f81838",
        "name": "Excursión a la Patagonia",
        "description": "Explora los glaciares y montañas de la Patagonia.",
        "duration": 10,
        "price": 4000,
        "status": "upcoming",
        "image": "https://picsum.photos/500/300",
        "start_date": "2024-10-01T00:00:00.000Z",
        "end_date": "2024-10-11T00:00:00.000Z",
        "bookingId": "1d3b879b-dedf-4f63-982c-c011cd597cad",
        "destination": { "name": "Patagonia, Argentina" },
        "accommodation": "Lodge en la montaña",
        "transport": [
            { "type": "avión" },
            { "type": "vehículo 4x4" }
        ],
        "activities": [
            { "name": "Trekking en los glaciares" },
            { "name": "Observación de fauna" }
        ]
    },
    {
        "id": "a1b83f84-54d9-4e9c-b1c5-bfc83a1f3a54",
        "name": "Tour de la Toscana",
        "description": "Recorre los viñedos y paisajes de la Toscana, disfrutando del vino y la gastronomía local.",
        "duration": 6,
        "price": 3800,
        "status": "upcoming",
        "image": "https://picsum.photos/600/400",
        "start_date": "2024-10-15T00:00:00.000Z",
        "end_date": "2024-10-21T00:00:00.000Z",
        "bookingId": "5c0d6d64-c594-45a7-97f6-5588f8c3c204",
        "destination": { "name": "Toscana, Italia" },
        "accommodation": "Villa en el campo",
        "transport": [
            { "type": "avión" },
            { "type": "auto de alquiler" }
        ],
        "activities": [
            { "name": "Cata de vinos" },
            { "name": "Tour gastronómico" }
        ]
    },
    {
        "id": "5d3c89d2-5a0f-4c14-81ab-9b5eab4d97b4",
        "name": "Viaje a las Montañas Rocosas",
        "description": "Disfruta de la naturaleza y los paisajes de las Montañas Rocosas.",
        "duration": 8,
        "price": 3500,
        "status": "upcoming",
        "image": "https://picsum.photos/500/300",
        "start_date": "2024-11-01T00:00:00.000Z",
        "end_date": "2024-11-09T00:00:00.000Z",
        "bookingId": "9b2b75e2-3dc9-44e0-a785-0c88d2f2d5ad",
        "destination": { "name": "Montañas Rocosas, Canadá" },
        "accommodation": "Cabaña en el bosque",
        "transport": [
            { "type": "avión" },
            { "type": "vehículo 4x4" }
        ],
        "activities": [
            { "name": "Excursión en kayak" },
            { "name": "Senderismo en el parque nacional" }
        ]
    }
];
