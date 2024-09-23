import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two functions to get promises
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for both promises to settle
  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      // Map the results to the desired structure
      return results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason.message,
      }));
    });
}
export default handleProfileSignup;
