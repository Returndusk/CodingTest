function solution(a, b) {
    const date = new Date(2016, a - 1, b);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    return day;
}