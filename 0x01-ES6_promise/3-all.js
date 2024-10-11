import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  // the functions in utils.js return promises
  uploadPhoto().then((valueObj) => {
    body = valueObj.body;
    return body;
  }).then(() => {
    createUser().then((nameObj) => {
      const { firstName, lastName } = nameObj;
      console.log(`${body} ${firstName} ${lastName}`);
    });
  }).catch(() => console.log('Signup system offline'));
}
