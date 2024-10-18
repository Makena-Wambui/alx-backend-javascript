export default function guardrail(mathFunction) {
  // mathFunction is a function.
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`${error}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
