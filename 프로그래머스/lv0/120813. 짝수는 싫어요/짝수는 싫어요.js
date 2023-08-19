const solution = (n, answer = []) => {
    for (let i = 1; i <= n; i += 2) answer.push(i);
    return answer;
}