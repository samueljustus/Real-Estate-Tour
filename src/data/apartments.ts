export interface Apartment {
  id: string;
  floorId: string;
  name: string;
  type: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  images: string[];
}

const towers = [
  { id: 'A', floors: 10 },
  { id: 'B', floors: 13 },
  { id: 'C', floors: 15 },
];

const apartmentTemplates = [
  {
    type: '2 Bedroom',
    area: '1393 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://a0.muscache.com/im/pictures/d0ca15e5-87bc-4912-bbc0-6c564e42afc7.jpg?im_w=1200',
    images: [
        'https://a0.muscache.com/im/pictures/airflow/Hosting-8860800/original/c83e5e0b-aba2-4097-a0a2-f2ddec5d24c8.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/8e7ae102-f0f9-4693-b51c-7359f7061e8b.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/airflow/Hosting-8860800/original/ffa5b916-8e3c-4383-8108-8bd866e8c65a.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/e7c90da4-fdcb-49c2-94d1-8f8e23c9f5d6.jpg?im_w=720'
    ]
  },
  {
    type: '3 Bedroom',
    area: '1650 sq ft',
    bedrooms: 3,
    bathrooms: 2,
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1241231236078822348/original/f9192592-8448-4d57-917e-9d5ba608fa95.jpeg?im_w=1200',
    images: [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1241231236078822348/original/98e1279e-3061-48ff-9034-2fc5179b4a48.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1241231236078822348/original/d19d7c7c-88ed-40a5-998b-3f50a340f0a6.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1241231236078822348/original/04a7d0cd-651a-4192-8f30-c55a5a4f8357.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-1241231236078822348/original/eb44f918-c874-4452-a247-b976de46c757.jpeg?im_w=720',
    ]
  },
  {
    type: '1 Bedroom',
    area: '950 sq ft',
    bedrooms: 1,
    bathrooms: 1,
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-715090923459501143/original/034ffd46-e6b9-47a5-9f1c-b33a83004406.jpeg?im_w=1200',
    images: [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-715090923459501143/original/699ce7f1-0f93-470e-9e85-110b24e0dd4f.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-715090923459501143/original/76c7adb3-db04-4b7a-8abb-56fb4e193a32.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-715090923459501143/original/36263801-9902-4fb9-a306-32f9b355c26b.jpeg?im_w=720',
        'https://a0.muscache.com/im/pictures/miso/Hosting-715090923459501143/original/ee2ff933-edf3-4c41-b80d-0c17e27feb77.jpeg?im_w=720'
    ]
  },
];




export const apartments: Apartment[] = towers.flatMap(tower =>
  Array.from({ length: tower.floors }, (_, floorIdx) => {
    const floorNumber = floorIdx + 1;
    const floorId = `${tower.id}-${floorNumber}`;
    return apartmentTemplates.map((tpl, i) => ({
      id: `${floorId}-${i + 1}`,
      floorId,
      name: `Unit ${floorNumber}${String.fromCharCode(65 + i)}`,
      ...tpl,
    }));
  }).flat()
); 


// export const aparmentImages: string[] = () => {

// }