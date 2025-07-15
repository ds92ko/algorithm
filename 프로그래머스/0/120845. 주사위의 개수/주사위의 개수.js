const solution = (box, n) => {
    const [w, d, h] = box;
    return ~~(w / n) * ~~(d / n) * ~~(h / n);
}