function reverseString(str) {
    if(str.length === 1 || 0 ) { // Base statement
        return str;
    }
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1)); // returns last letter, then splice last letter from string and run again until string = 1 or 0
}


 console.log(reverseString("Hello"));
 console.log(reverseString("Church"));
 console.log(reverseString("MuckDuck"));
 console.log(reverseString(""));
 console.log(reverseString("Bro"));