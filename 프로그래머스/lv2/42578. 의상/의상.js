function solution(clothes) {
  let count = 1;
  let clothType = {};

  for (let i = 0; i < clothes.length; i++) {
    let type = clothes[i][1];

    if (clothType[type]) {
      clothType[type]++;
    } else {
      clothType[type] = 1;
    }
  }

  for (let type in clothType) {
    count *= clothType[type] + 1;
  }

  return count - 1;
}
