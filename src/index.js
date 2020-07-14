
// You should implement your task here.

module.exports = function towelSort (mx = []) {
  return [].concat(...mx.map((arr, i) => i % 2 ? arr.slice().reverse() : arr.slice()));
}
