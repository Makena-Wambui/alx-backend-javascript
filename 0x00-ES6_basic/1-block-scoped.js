export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    function bar() {
      var task = true;
      var task2 = false;
    }
    bar();
  }

  return [task, task2];
}
