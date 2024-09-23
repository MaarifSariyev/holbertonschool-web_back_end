export default function guardrail(mathFunction) {
  const queue = []; // Create an empty array named queue

  try {
    // Execute the mathFunction and push the result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error is thrown, push the error message to the queue
    queue.push(error.message);
  } finally {
    // Always push the message to the queue
    queue.push('Guardrail was processed');
  }

  return queue; // Return the final queue
}
