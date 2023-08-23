function solution(cards1, cards2, goal) {
  let cd1 = 0;
  let cd2 = 0;

  let possible = goal.some((word) => {
    if (word === cards1[cd1]) {
      cd1++;
    } else if (word === cards2[cd2]) {
      cd2++;
    } else {
      return true;
    }
  });
  return possible ? 'No' : 'Yes';
}
