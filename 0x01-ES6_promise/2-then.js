// Using the prototype below,
// Append three handlers to the function:
export default function handleResponseFromAPI(promise) {
  // If the promise resolves, return an object with the following attributes:
  // status: 200, body: success.
  // If the promise rejects, return an empty Error object
  // Always log to the console 'Got a response from the API'

  return promise
    .finally(() => console.log('Got a response from the API'))
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error());
}
