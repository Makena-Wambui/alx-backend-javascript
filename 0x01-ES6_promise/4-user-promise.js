export default function signUpUser(firstName, lastName) {
  // eslint-disable-next-line
  return new Promise((resolve, reject) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
