function solution(new_id) {
  // 1단계
  new_id = new_id.toLowerCase();

  // 2단계
  let possible = 'abcdefghijklmnopqrstuvwxyz0123456789-_.';
  let a = '';
  for (let char of new_id) {
    if (possible.includes(char)) a += char;
  }
  new_id = a;

  // 3단계
  while (new_id.includes('..')) {
    new_id = new_id.replace('..', '.');
  }

  // 4단계
  if (new_id.startsWith('.')) new_id = new_id.slice(1);
  if (new_id.endsWith('.')) new_id = new_id.slice(0, -1);

  // 5단계
  if (new_id === '') new_id = 'a';

  // 6단계
  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15);
    if (new_id.endsWith('.')) new_id = new_id.slice(0, -1);
  }

  // 7단계
  while (new_id.length < 3) {
    new_id += new_id.charAt(new_id.length - 1);
  }

  return new_id;
}
