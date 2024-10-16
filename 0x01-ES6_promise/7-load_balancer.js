export default function loadBalancer(chinaDownload, USDownload) {
  // should return the value returned by the promise that resolved the first.
  return Promise.race([chinaDownload, USDownload])
    .then((value) => value);
}
