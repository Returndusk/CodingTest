function solution(n, lost, reserve) {
  const realLost = [...lost].sort();
  const realReserve = [...reserve].sort();

  lost = realLost.filter((v) => !realReserve.includes(v));
  reserve = realReserve.filter((v) => !realLost.includes(v));

  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    const 앞 = reserve.indexOf(lost[i] - 1);
    const 뒤 = reserve.indexOf(lost[i] + 1);

    if (앞 !== -1) {
      answer++;
      reserve.splice(앞, 1);
    } else if (뒤 !== -1) {
      answer++;
      reserve.splice(뒤, 1);
    }
  }

  return answer;
}
