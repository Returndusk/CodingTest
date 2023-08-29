function solution(l, r) {
    let answer = [];

    if (l % 5 !== 0) l += (5 - l % 5)

    for (let i = l; i <= r; i += 5) {
      if (i.toString().split('').every(num => num === '0' || num === '5')) answer.push(i);
    }
    return answer.length ? answer : [-1];
}