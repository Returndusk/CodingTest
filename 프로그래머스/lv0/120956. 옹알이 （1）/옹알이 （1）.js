function solution(babbling) {
  let result = 0;
  const speak = ['aya', 'ye', 'woo', 'ma'];
 
    for (let i = 0; i < babbling.length; i++) {
    let b = babbling[i];

    for (let j = 0; j < speak.length; j++) {
      if (b.includes(speak[j].repeat(2))) {
        break;
      } else {
        b = b.split(speak[j]).join(' ');
      }
    }
    if (b.split(' ').join('').length === 0) result++;
  }
    
  return result;
}
