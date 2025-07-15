const solution = (cipher, code, str = '') => {
    for (let i = code; i <= cipher.length; i += code) 
        if (i % code === 0) str += cipher.at(i - 1);
    return str;
}