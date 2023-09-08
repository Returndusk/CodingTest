function solution(record) {
  let answer = [];
  let uid = {};
  let lastStatus = [];

  for (let i = 0; i < record.length; i++) {
    let [status, userId, nickName] = record[i].split(' ');

    if (status === 'Enter' || status === 'Change') uid[userId] = nickName;
    if (status === 'Enter' || status === 'Leave')
      lastStatus.push({ userId, status });
  }

  for (let i = 0; i < lastStatus.length; i++) {
    if (lastStatus[i].status === 'Enter')
      answer.push(`${uid[lastStatus[i].userId]}님이 들어왔습니다.`);
    if (lastStatus[i].status === 'Leave')
      answer.push(`${uid[lastStatus[i].userId]}님이 나갔습니다.`);
  }

  return answer;
}
