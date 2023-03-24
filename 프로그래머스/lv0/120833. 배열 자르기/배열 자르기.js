function solution(numbers, num1, num2) {
    var answer = [];
    
    for (let i = num1; num1 <= num2; num1++)
        answer.push(numbers[num1])
    
    return answer;
}