function firstLetterUpperCase(name) {
    var firstLetter = name[0];
    return "".concat(firstLetter).concat(name.substring(1));
}
console.log(firstLetterUpperCase('Augusto'));
