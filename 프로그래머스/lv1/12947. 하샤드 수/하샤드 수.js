function solution(x) {
  let harshad = 0;
  let xArray = String(x).split('');
  
  for (let i = 0; i < xArray.length; i++) {
    harshad += Number(xArray[i]);
  }

  return (x % harshad === 0) ? true : false;
}