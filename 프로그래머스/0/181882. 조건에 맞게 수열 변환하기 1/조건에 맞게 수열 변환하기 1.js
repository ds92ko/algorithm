const solution = arr => arr
    .map(num => 
         num >= 50 && num % 2 === 0 
         ? num / 2
         : num < 50 && num % 2 !== 0
             ? num * 2
             : num
    );