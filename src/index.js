module.exports = function reverse (n) {
    n = n + "";
    n = n.split("").reverse().join("");
    n = Number.parseInt(n);
  return (n);
}
