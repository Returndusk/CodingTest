function solution(n, lost, reserve) {
  const realLost = [...lost.sort()];
  const realReserve = [...reserve].sort();

  lost = realLost.filter((v) => !realReserve.includes(v));
  reserve = realReserve.filter((v) => !realLost.includes(v));

  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    const prevIndex = reserve.indexOf(lost[i] - 1);
    const nextIndex = reserve.indexOf(lost[i] + 1);

    if (prevIndex !== -1) {
      answer++;
      reserve.splice(prevIndex, 1);
    } else if (nextIndex !== -1) {
      answer++;
      reserve.splice(nextIndex, 1);
    }
  }

  return answer;
}
