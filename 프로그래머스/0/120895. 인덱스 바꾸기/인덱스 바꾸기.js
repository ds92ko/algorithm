const solution = (my_string, num1, num2) => {
    const array = [...my_string];
    
    array[num1] = my_string.at(num2);
    array[num2] = my_string.at(num1);
    
    return array.join('');
}