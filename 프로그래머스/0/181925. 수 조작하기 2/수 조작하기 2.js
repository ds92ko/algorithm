const solution = numLog => numLog.map((num, idx) => {
    switch(numLog.at(idx + 1)) {
        case num + 1:
            return 'w';
        case num - 1:
            return 's';
        case num + 10:
            return 'd';
        case num - 10:
            return 'a';
        default:
            return '';
    }
}).join('');