// Challenge 7: Write a function that takes a string as a parameter and returns the count of each character in 
// the string as an object. The keys in the object should be the characters, and the values should be the counts of each character. 
// Then, call the function with any string and log the result to the console.

const inputString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.";

function countLetters(text) {

    const charactersArray = text.split('');

    const charactersMap = new Map();

    charactersArray.forEach(character => {

        if (charactersMap.get(character) === undefined) {
            charactersMap.set(character, 1);

            return;
        };

        charactersMap.set(character, charactersMap.get(character) + 1);
    });


    return charactersMap;
};


console.log(countLetters(inputString));

