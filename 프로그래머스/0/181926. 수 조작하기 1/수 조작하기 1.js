const calc = {
    w: n => n + 1,
    s: n => n - 1,
    d: n => n + 10,
    a: n => n - 10
}

const solution = (n, control) => {
    for (let str of control)
        n = calc[str](n);
    return n;
}