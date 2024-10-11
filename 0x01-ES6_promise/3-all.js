import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // the functions in utils.js return promises
  return uploadPhoto() // returns a promise
    .then((valueObj) => {
      // valueObj is the resolved value of the promise returned by uploadPhoto
      // the resolved value is an object with a key 'body'
      const body = valueObj.body;
      return createUser()
        .then((nameObj) => {
          const { firstName, lastName } = nameObj;
          console.log(`${body} ${firstName} ${lastName}`);
        });
    })
    .catch(() => console.log('Signup system offline'));
}
