export default function uploadPhoto(filename) {
  return new Promise((response, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
