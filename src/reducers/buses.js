const initialState = [
  {
    id: '214',
    name: 'Kongu Express',
    depatureTime: '18:30',
    arrivalTime: '06:15',
    fare: '1000',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['Salem', 'Erode', 'Coimbatore'],
    seats: [
      { no: '1', isBooked: false },
      { no: '2', isBooked: true },
      { no: '3', isBooked: false },
      { no: '4', isBooked: false },
      { no: '5', isBooked: false },
      { no: '6', isBooked: true },
      { no: '7', isBooked: false },
      { no: '8', isBooked: true },
      { no: '9', isBooked: false },
      { no: '10', isBooked: true },
    ],
  },
  {
    id: '102',

    name: 'Kaniyakumari Express',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['Kanyakumari', 'Madurai', 'tenkasi'],
  },
  {
    id: '786',

    name: 'Pandiyan Express',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['Coimbatore', 'Salem', 'madurai'],
  },
  {
    id: '618',
    name: 'vande bharat',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['trichy', 'Coimbatore', 'Madurai'],
  },
  {
    id: '188',
    name: 'Podhigai',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '1200',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['tenkasi', 'madurai', 'trichy'],
  },
];
export default (state = initialState, action) => {
  return state;
};
