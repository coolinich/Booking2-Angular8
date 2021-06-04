import { Hotel } from './app/interfaces/hotel';

export const MAX_CATEGORY = 5;
export const ALL_PROPERTIES_TYPES: string[] = ['hostel', 'apartments', 'hotel', 'room in apartment'];
export const ALL_FACILITIES: string[] = [
  'wifi',
  'privateBathroom',
  'sharedBathroom',
  'patio',
  'kitchen',
  'parking',
  'cableTV',
  'hairdrier',
  'workout',
  'airportShuttle'
];

export const ALL_HOTELS: Hotel[] = [
  {
    title: 'Hotel 1',
    id: 'mif14kfm',
    img: '../../../assets/hotel_preview.jpg',
    shortDescription: 'lorem',
    fullDescription: 'Lorem Ipsum more details',
    price: 998,
    location: 'Estonia',
    address: 'Tallinn',
    category: 1,
    type: ALL_PROPERTIES_TYPES[0],
    facilities: {
      wifi: true,
      privateBathroom: true,
      patio: true
    }
  }, {
    title: 'Hotel 2',
    id: 'f8pn18ne',
    img: '../../../assets/hotel_preview.jpg',
    shortDescription: 'lorem',
    fullDescription: 'Lorem Ipsum more details',
    price: 999,
    location: 'Italy',
    address: 'Milano',
    category: 2,
    type: ALL_PROPERTIES_TYPES[1],
    facilities: {
      wifi: true,
      privateBathroom: true,
      patio: true
    }
  }, {
    title: 'Hotel 3',
    id: 'ngnqrgav',
    img: '../../../assets/hotel_preview.jpg',
    shortDescription: 'lorem',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    price: 1000,
    location: 'Italy',
    address: 'Milano',
    category: 5,
    type: ALL_PROPERTIES_TYPES[2],
    facilities: {
      wifi: true,
      privateBathroom: true,
      sharedBathroom: true,
      patio: true,
      kitchen: true,
      parking: true,
      cableTV: true,
      hairdrier: true,
      workout: true,
      airportShuttle: true
    }
  }, {
    title: 'Hotel 4',
    id: 'tocb0re9',
    img: '../../../assets/hotel_preview.jpg',
    shortDescription: 'lorem',
    fullDescription: 'Lorem Ipsum more details',
    price: 1001,
    location: 'Italy',
    address: 'Milano',
    category: 3,
    type: ALL_PROPERTIES_TYPES[3],
    facilities: {
      wifi: true,
      privateBathroom: true,
      patio: true
    }
  }, {
      title: 'Hotel 5',
      id: 'tocb1af9',
      img: '../../../assets/hotel_preview.jpg',
      shortDescription: 'lorem',
      fullDescription: 'Lorem Ipsum more details',
      price: 1002,
      location: 'Italy',
      address: 'Milano',
      category: 3,
      type: ALL_PROPERTIES_TYPES[1],
      facilities: {
        wifi: true,
        sharedBathroom: true,
        hairdrier: true,
        patio: true
      }
  }];
