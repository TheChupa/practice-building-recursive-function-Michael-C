function reverseString(str) {
    if(str.length === 1 || str.length === 0) { // Base statement
        return str;
    }
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1)); // 
}


 console.log(reverseString("Hello")); // elloH
 console.log(reverseString("Church")); // hcruhC
 console.log(reverseString("MuckDuck")); // kcuDkcuM
 console.log(reverseString("")); // ""
 console.log(reverseString("Bro")); // orB