function reverseString(str) {
    if(str.length === 1) {
        return str;
    }   
    return str.charAt(str.length -1) + reverseString(str.slice(0, -1));
}

console.log(reverseString("man"));
console.log(reverseString("Ghost"));
console.log(reverseString("Muckduck"));
