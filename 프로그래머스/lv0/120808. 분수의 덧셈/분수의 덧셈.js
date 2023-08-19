const getGCD = (a, b) => a % b ? getGCD(b, a % b) : b;
const solution = (denum1, num1, denum2, num2) => {
    const denum = (denum1 * num2) + (denum2 * num1);
    const num = num1 * num2;
    const gcd = getGCD(denum, num);

    return [denum / gcd, num / gcd];
}