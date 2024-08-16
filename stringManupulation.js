//Write a function capitalize that capitalizes the first letter of a given string.
//Capitalizing Words
function capitalize(str) {
    let word = str.split(' ');
    let capitalizedWords = word.map(word => {
        const firstCharCode = word.charCodeAt(0);
        const capitalizedChar = firstCharCode >= 97 && firstCharCode <= 122 
            ? String.fromCharCode(firstCharCode - 32) 
            : word.charAt(0);
        return capitalizedChar + word.slice(1).toLowerCase(); 
    });
    return capitalizedWords.join(' '); 
}
console.log("**Capitalizing Word**");   
console.log(capitalize('i am aashiyana'));

//Capitalizing Each Word:
//Write a function capitalizeAll that capitalizes each word in a given sentence.
function capitalizeAll(sentence) {
    return sentence.split(' ').map(function(word) {
        const firstCharCode = word.charCodeAt(0);
        const capitalizedChar = firstCharCode >= 97 && firstCharCode <= 122
            ? String.fromCharCode(firstCharCode - 32) 
            : word.charAt(0);
        let upperRest = '';
        for (let i = 1; i < word.length; i++) {
            let charCode = word.charCodeAt(i);
            if (charCode >= 97 && charCode <= 122) {
                upperRest += String.fromCharCode(charCode - 32);
            } else {
                upperRest += word.charAt(i);
            }
        }

        return capitalizedChar + upperRest;
    }).join(' ');
}
console.log("**Capitalizing Each Word**");
console.log(capitalizeAll('india is my country')); 

// Word Existence Check:
//Write a function isExist that checks if a given word is part of a given string.
function isExist(str, word) {
    for (let i = 0; i <= str.length - word.length; i++) {
        let match = true;
        for (let j = 0; j < word.length; j++) {
            if (str[i + j] !== word[j]) {
                match = false;
                break;
            }
        }
        if (match) return true;
    }
    return false;
}
console.log("**Word Existence Check**");
console.log(isExist("India is my country", "India")); 
console.log(isExist("India is my country", "xyz"));   

// Word Occurrence Count:
//Write a function getOccurrenceCount that finds the number of occurrences of a word/phrase in a given string.
function getOccurrenceCount(str, word) {
    let count = 0;
    let wordLength = word.length;

    for (let i = 0; i <= str.length - wordLength; i++) {
        let match = true;
        for (let j = 0; j < wordLength; j++) {
            if (str[i + j] !== word[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            count++;
            i += wordLength - 1; 
        }
    }
    return count;
}
console.log("**getOccurrenceCount**");
console.log(getOccurrenceCount("India is my country", "India")); 
console.log(getOccurrenceCount("India is my country", "xyz"));

//Word Density Calculation:
//Write a function wordDensity that calculates the word density of a given string. Word density is defined as (occurrenceCount / totalWords) * 100.
function wordDensity(str, word) {
    const totalWords = str.split(' ').length; 
    const occurrenceCount = getOccurrenceCount(str, word); 
    const density = (occurrenceCount / totalWords) * 100;
    return density;
}
console.log("**Word Density Calculation**");
console.log(wordDensity("India is my country", "country")); 


// Function to extract file extension
//Write a function getExt that extracts the file extension from a given string representing a file name. If no extension is present, return null.

function getExt(filename) {
    const dotIndex = filename.lastIndexOf('.');
    if (dotIndex === -1 || dotIndex === 0 || dotIndex === filename.length - 1) {
        return null;
    }
    return filename.slice(dotIndex + 1);
}
module.exports = {
    getExt
};
console.log("**File Extension Extraction**");
console.log(getExt("index.html")); 
console.log(getExt("flower.png")); 
console.log(getExt("document"));   

// Removing Whitespace:
//Write a function removeWhitespace that removes all whitespaces from a given string.
function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}
console.log("**Removing Whitespace**");
console.log(removeWhitespace("  Hello    World  ")); 
console.log(removeWhitespace("   JavaScript   is  awesome   ")); 
console.log(removeWhitespace("Line\nBreaks\tand\tSpaces")); 

//Reversing Words:
//Write a function reverseWords that reverses the order of words in a given sentence.
// Function to reverse the order of words in a given sentence
function reverseWords(sentence) {
    return sentence.split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}
console.log("**Reversing Words**");
console.log(reverseWords("Hello world")); 

//Counting Vowels -
//Write a function countVowels that counts the number of vowels in a given string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("**Counting Vowels**");
console.log(countVowels("hello")); 

//String Palindrome Check:
//Write a function isPalindrome that checks if a given string is a palindrome
function isPalindrome(str) {
    const normalizedStr = str
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase();  
        const reversedStr = normalizedStr.split('').reverse().join('');
        return normalizedStr === reversedStr;
}
console.log("**String Palindrome Check**");
console.log(isPalindrome("hello")); 

//. String Truncation:
//Write a function truncateString that truncates a given string to a specified length and appends an ellipsis ("...").
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + '...';
    } else {
        return str;
    }
}
console.log("**String Truncation**");
console.log(truncateString("India is my country.", 10));

// String Masking:
//Write a function maskString that masks sensitive information in a string (e.g., credit card numbers, passwords).
function maskString(str) {
    const length = str.length;
    const visibleCount = 4; 
    if (length <= visibleCount) {
        return str;
    }
    const maskedPart = '*'.repeat(length - visibleCount);
    const visiblePart = str.slice(-visibleCount);   
    return maskedPart + visiblePart;
}
console.log("**String Masking**");
console.log(maskString("password1234"));

//Email Validation:
//Write a function validateEmail that checks if a given string is a valid email address.
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
console.log("**Email Validation**");
console.log(validateEmail("test@example.com"));
console.log(validateEmail("invalid-email"));