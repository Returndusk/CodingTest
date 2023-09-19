function solution(numbers) {
  const arraySet = new Set();

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const find = (str, number) => {
    if (str.length) {
      const num = parseInt(str);
      if (isPrime(num)) arraySet.add(num);
    }

    for (let i = 0; i < number.length; i++) {
      find(str + number[i], number.slice(0, i) + number.slice(i + 1));
    }
  };

  find('', numbers);
  return arraySet.size;
}
