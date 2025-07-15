const solution = my_string => [...my_string]
    .map(str => str === str.toLowerCase() 
         ? str.toUpperCase() 
         : str.toLowerCase())
    .join('');