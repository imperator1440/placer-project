import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

import './PlaceForm.css';

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

const UpdatePlace = () => {
  const placeId =useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(place => place.id === placeId);

  const [formState, inputHandler] = useForm({
    title: {
      value: identifiedPlace.title,
      isValid: true
    },
    description: {
      value: identifiedPlace.description,
      isValid: true
    }
  }, true);
  
  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
  };

  if (!identifiedPlace) {
    return <div className='center'>
        <h2>
          Could not find place!
        </h2>
      </div>
  }

  return <form className='place-form'> 
    <Input
      id='title'
      element='input'
      type='text'
      label='Title'
      validators={[VALIDATOR_REQUIRE()]}
      errorText='Please enter a valid title.'
      onInput={inputHandler}
      initialValue={formState.inputs.title.value}
      initialValid={formState.inputs.title.isValid}
    />
    <Input
      id='description'
      element='textarea'
      label='Description'
      validators={[VALIDATOR_MINLENGTH(5)]}
      errorText='Please enter a valid description (min. 5 characters).'
      onInput={inputHandler}
      initialValue={formState.inputs.description.value}
      initialValid={formState.inputs.description.isValid}
    />
    <Button type='submit' disabled={!formState.isValid}>
      UPDATE PLACE
    </Button>
  </form>
};

export default UpdatePlace;