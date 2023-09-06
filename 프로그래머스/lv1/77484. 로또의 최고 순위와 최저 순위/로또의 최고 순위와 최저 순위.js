function solution(lottos, win_nums) {
  const zero = lottos.filter((v) => v === 0).length;
  const match = lottos.filter((v) => win_nums.includes(v)).length;

  const rank = (num) => {
    if (num === 6) return 1;
    if (num === 5) return 2;
    if (num === 4) return 3;
    if (num === 3) return 4;
    if (num === 2) return 5;
    if (num === 1) return 6;
    return 6;
  };

  const maxRank = rank(match + zero);
  const minRank = rank(match);

  return [maxRank, minRank];
}
