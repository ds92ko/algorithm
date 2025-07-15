const solution = (cipher, code, str = '') => {
    for (let i = 1; i <= cipher.length; i++) 
        if (i % code === 0) str += cipher.at(i - 1);
    return str;
}