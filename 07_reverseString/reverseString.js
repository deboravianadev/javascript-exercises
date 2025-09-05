const reverseString = function(word) {
    let newWord = '';
    for(let i = word.length; i >= 0; i--) {
        newWord += word.charAt(i);
    }
    return newWord;
    // return string.split("").reverse().join("");
    // dessa forma transformaria cada caracter em um item de um array
    // com o reverse, reverte todo o array
    // com o join juntaria tudo novamente
};

// Do not edit below this line
module.exports = reverseString;
