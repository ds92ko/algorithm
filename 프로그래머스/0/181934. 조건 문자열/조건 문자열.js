const operators = {
    ">=": (n, m) => +(n >= m),
    "<=": (n, m) => +(n <= m),
    ">!": (n, m) => +(n > m),
    "<!": (n, m) => +(n < m)
};

const solution = (ineq, eq, n, m) => operators[`${ineq}${eq}`](n, m);

