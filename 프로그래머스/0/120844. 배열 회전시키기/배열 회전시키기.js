const solution = (numbers, direction) => direction === 'left' 
    ? [...numbers.slice(1), numbers.at(0)]
    : [numbers.at(-1), ...numbers.slice(0, -1)];