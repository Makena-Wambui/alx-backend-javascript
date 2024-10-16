import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // this function should call the two functions signUpUser and uploadPhoto
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  // When the promises are all settled it should return an array
  return Promise.allSettled([user, photo])
    .then((objectsArray) => objectsArray.map((object) => ({
      status: object.status,
      value: object.status === 'fulfilled' ? object.value : String(object.reason),
    })));
}
