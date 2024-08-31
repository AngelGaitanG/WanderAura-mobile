export const TRIPS = [
    {
      "id": "1",
      "name": "Aventura en los Alpes Suizos",
      "description": "Explora los majestuosos Alpes Suizos con una combinación de senderismo y esquí.",
      "duration": 10,
      "price": 4500,
      "status": "active",
      "image": "https://picsum.photos/800/500?random=1",
      "start_date": "2024-12-15T00:00:00.000Z",
      "end_date": "2024-12-25T00:00:00.000Z",
      "accommodations": [
        {
          "id": "1",
          "name": "Cabaña en los Alpes",
          "description": "Una acogedora cabaña con vistas a las montañas.",
          "ubication": "CH-1234",
          "type": "cabin",
          "price": 3000
        },
        {
          "id": "2",
          "name": "Hotel de Lujo en Interlaken",
          "description": "Hotel 5 estrellas con spa y piscina.",
          "ubication": "CH-5678",
          "type": "hotel",
          "price": 5000
        }
      ],
      "destination": {
        "id": "1",
        "name": "Interlaken",
        "description": "Un hermoso valle en Suiza rodeado de montañas nevadas.",
        "ubication": "CH-3812",
        "attractions": [
          "Jungfraujoch",
          "Lago Thun",
          "Schilthorn"
        ],
        "photos": [
          "https://picsum.photos/700/400",
          "https://picsum.photos/700/400",
          "https://picsum.photos/700/400"
        ]
      },
      "transport": [
        {
          "id": "1",
          "type": "plane",
          "scheme": "Directo",
          "price": 1200
        }
      ],
      "activities": [
        {
          "id": "1",
          "name": "Senderismo en los Alpes",
          "description": "Recorrido guiado por los senderos más emblemáticos de los Alpes.",
          "ubication": "Grindelwald",
          "duration": 4,
          "price": 200
        },
        {
          "id": "2",
          "name": "Esquí en Jungfraujoch",
          "description": "Disfruta de las mejores pistas de esquí en Jungfraujoch.",
          "ubication": "Jungfraujoch",
          "duration": 5,
          "price": 300
        }
      ],
      "reviews": [
        {
          "id": "1",
          "rating": 5,
          "comment": "Una experiencia inolvidable en los Alpes Suizos. Los paisajes son impresionantes.",
          "date": "2024-08-05T10:00:00.000Z"
        },
        {
          "id": "2",
          "rating": 4,
          "comment": "El senderismo fue espectacular, pero el esquí podría haber sido mejor organizado.",
          "date": "2024-08-07T14:30:00.000Z"
        }
      ],
      "bookings": [
        {
          "id": "1",
          "date": "2024-08-10T15:00:00.000Z",
          "status": "confirmed"
        },
        {
          "id": "2",
          "date": "2024-08-12T09:00:00.000Z",
          "status": "pending"
        }
      ],
      "posts": [
        {
          "id": "1",
          "title": "Día de senderismo en Grindelwald",
          "content": "Hoy exploramos los senderos de Grindelwald. La vista desde la cima fue espectacular.",
          "images": "https://picsum.photos/800/500",
          "publicDate": "2024-08-06T18:00:00.000Z"
        },
        {
          "id": "2",
          "title": "Esquí en Jungfraujoch",
          "content": "Disfrutamos de un día lleno de adrenalina en las pistas de Jungfraujoch.",
          "images": "https://picsum.photos/800/500",
          "publicDate": "2024-08-08T16:00:00.000Z"
        }
      ]
    },
    {
      "id": "2",
      "name": "Safari en Kenia",
      "description": "Vive la experiencia de un safari en la reserva natural Masái Mara.",
      "duration": 7,
      "price": 3800,
      "status": "active",
      "image": "https://picsum.photos/800/500?random=2",
      "start_date": "2024-11-01T00:00:00.000Z",
      "end_date": "2024-11-08T00:00:00.000Z",
      "accommodations": [
        {
          "id": "3",
          "name": "Lodge en Masái Mara",
          "description": "Lodge de lujo en el corazón de la reserva.",
          "ubication": "KE-1234",
          "type": "lodge",
          "price": 4000
        },
        {
          "id": "4",
          "name": "Campamento en la Sabana",
          "description": "Acampada en plena sabana africana.",
          "ubication": "KE-5678",
          "type": "camp",
          "price": 2500
        }
      ],
      "destination": {
        "id": "2",
        "name": "Masái Mara",
        "description": "Una de las reservas naturales más famosas de África, hogar de la Gran Migración.",
        "ubication": "KE-20500",
        "attractions": [
          "Gran Migración",
          "Río Mara",
          "Comunidad Masái"
        ],
        "photos": [
          "https://picsum.photos/700/400",
          "https://picsum.photos/700/400",
          "https://picsum.photos/700/400"
        ]
      },
      "transport": [
        {
          "id": "2",
          "type": "jeep",
          "scheme": "Todo terreno",
          "price": 800
        }
      ],
      "activities": [
        {
          "id": "3",
          "name": "Safari matutino",
          "description": "Observación de la fauna salvaje durante el amanecer.",
          "ubication": "Reserva Masái Mara",
          "duration": 3,
          "price": 400
        },
        {
          "id": "4",
          "name": "Visita a la comunidad Masái",
          "description": "Conoce la cultura y tradiciones del pueblo Masái.",
          "ubication": "Aldea Masái",
          "duration": 2,
          "price": 150
        }
      ],
      "reviews": [
        {
          "id": "3",
          "rating": 5,
          "comment": "Ver a los leones en su hábitat natural fue una experiencia única.",
          "date": "2024-08-15T10:00:00.000Z"
        },
        {
          "id": "4",
          "rating": 4,
          "comment": "La visita a la comunidad Masái fue educativa, pero un poco corta.",
          "date": "2024-08-17T14:30:00.000Z"
        }
      ],
      "bookings": [
        {
          "id": "3",
          "date": "2024-08-20T15:00:00.000Z",
          "status": "confirmed"
        },
        {
          "id": "4",
          "date": "2024-08-22T09:00:00.000Z",
          "status": "pending"
        }
      ],
      "posts": [
        {
          "id": "3",
          "title": "Safari en la reserva Masái Mara",
          "content": "Increíble experiencia viendo la fauna salvaje, desde leones hasta elefantes.",
          "images": "https://picsum.photos/800/500",
          "publicDate": "2024-08-16T18:00:00.000Z"
        },
        {
          "id": "4",
          "title": "Cultura Masái",
          "content": "Hoy visitamos una aldea Masái y aprendimos sobre sus tradiciones y estilo de vida.",
          "images": "https://picsum.photos/800/500",
          "publicDate": "2024-08-18T16:00:00.000Z"
        }
      ]
    },
    {
      "id": "3",
      "name": "Ruta del Vino en La Rioja, España",
      "description": "Un recorrido por las mejores bodegas de vino en La Rioja, con cata incluida.",
      "duration": 5,
      "price": 2100,
      "status": "active",
      "image": "https://picsum.photos/800/500?random=3",
      "start_date": "2024-09-10T00:00:00.000Z",
      "end_date": "2024-09-15T00:00:00.000Z",
      "accommodations": [
        {
          "id": "5",
          "name": "Hotel Bodega en La Rioja",
          "description": "Alojamiento en una bodega con vistas a los viñedos.",
          "ubication": "ES-1234",
          "type": "hotel",
          "price": 2500
        }
      ],
      "destination": {
        "id": "3",
        "name": "La Rioja",
        "description": "Región vinícola en el norte de España, famosa por sus vinos tintos.",
        "ubication": "ES-26001",
        "attractions": [
          "Bodegas Marqués de Riscal",
          "Museo Vivanco",
          "Catedral de Santo Domingo"
        ],
        "photos": [
          "https://picsum.photos/700/400",
          "https://picsum.photos/700/400",
          "https://picsum.photos/700/400"
        ]
      },
      "transport": [
        {
          "id": "3",
          "type": "bus",
          "scheme": "Tour guiado",
          "price": 300
        }
      ],
      "activities": [
        {
          "id": "5",
          "name": "Cata de vinos en Bodegas Marqués de Riscal",
          "description": "Degustación de vinos de una de las bodegas más prestigiosas de La Rioja.",
          "ubication": "Bodegas Marqués de Riscal",
          "duration": 2,
          "price": 100
        },
        {
          "id": "6",
          "name": "Visita al Museo Vivanco",
          "description": "Recorrido por el museo que cuenta la historia del vino.",
          "ubication": "Briones",
          "duration": 1,
          "price": 50
        }
      ],
      "reviews": [
        {
          "id": "5",
          "rating": 5,
          "comment": "Un tour increíblemente informativo y delicioso. Los vinos fueron excepcionales.",
          "date": "2024-08-12T10:00:00.000Z"
        },
        {
          "id": "6",
          "rating": 4,
          "comment": "La cata de vinos fue excelente, pero el tiempo en el museo fue un poco corto.",
          "date": "2024-08-14T14:30:00.000Z"
        }
      ],
      "bookings": [
        {
          "id": "5",
          "date": "2024-08-18T15:00:00.000Z",
          "status": "confirmed"
        },
        {
          "id": "6",
          "date": "2024-08-20T09:00:00.000Z",
          "status": "pending"
        }
      ],
      "posts": [
        {
          "id": "5",
          "title": "Cata de Vinos en La Rioja",
          "content": "Degustación de vinos exquisitos en Bodegas Marqués de Riscal.",
          "images": "https://picsum.photos/800/500",
          "publicDate": "2024-08-19T18:00:00.000Z"
        },
        {
          "id": "6",
          "title": "Recorriendo el Museo Vivanco",
          "content": "Un viaje a través de la historia del vino en el Museo Vivanco.",
          "images": "https://picsum.photos/800/500",
          "publicDate": "2024-08-21T16:00:00.000Z"
        }
      ]
    }
  ]
  