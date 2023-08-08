function solution(a, b, n) {
  let cola = 0;

  while (n >= a) {
    let newCola = Math.floor(n / a) * b;
    cola += newCola;
    n = newCola + (n % a);
  }
  return cola;
}
