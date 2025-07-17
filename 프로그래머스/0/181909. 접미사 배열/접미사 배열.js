const solution = (my_string) => [...my_string]
    .map((_, idx) => my_string.slice(-(idx + 1)))
    .sort();