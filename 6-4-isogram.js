function isIsogram (str) {
    // Determine whether the string has no repeating letters (consecutive or non).
    str = str.toLowerCase();
    // Ignore case
    for (let char of str) {
        if (str.indexOf(char) != str.lastIndexOf(char) ){
            // There are at least two instances of char in str
            return false;
        }
    }
    return true;
}

console.log(isIsogram("dermatoglyphics"));