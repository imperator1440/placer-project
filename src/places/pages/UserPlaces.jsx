import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList/PlaceList";

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky skrapers in the world!',
    imageUrl: 'https://media.timeout.com/images/101705309/750/422/image.jpg',
    address: '20 W 34th St., New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Tour Eiffel',
    description: 'One of the most famous buildings in Paris!',
    imageUrl: 'https://cdn.sortiraparis.com/images/80/83517/756379-visuel-paris-tour-eiffel.jpg',
    address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris',
    location: {
      lat: 48.8583701,
      lng: 2.2944813
    },
    creator: 'u2'
  }
];

const UserPlaces = () => { 
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;