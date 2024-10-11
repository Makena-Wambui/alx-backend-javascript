// Using the prototype below,
// Append three handlers to the function:
export default function handleResponseFromAPI(promise) {
  // If the promise resolves, return an object with the following attributes:
  // status: 200, body: success
  promise.then(() => ({
    status: 200,
    body: 'success',
  }));

  // When the Promise rejects, return an empty Error object
  promise.catch(() => new Error());

  // For every resolution, log Got a response from the API to the console
  promise.finally(() => console.log('Got a response from the API'));
}
