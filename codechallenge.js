/**
 * Most frequent characters
 *
 * For a given string, return a list of the characters that occur most
 * frequently.
 *
 * - Unicode character set
 * - List returned can be in any order
 * - Case sensitive
 *
 * eg:
 *        "aabbcccdde"         => ['c']
 *        "aabbbcccddeee"      => ['b', 'c', 'e']
 *        "aabbccddeee"        => ['e']
 *        "aAAbcdaabdd"        => ['a', 'd']
 *        "aabbbccddddaaa"     => ['a']
 *        "aabbbcccddeeee"     => ['e']
 */

 (function() {
    const SAMPLE_INPUT_1 = 'aabbcccdde';
    const SAMPLE_INPUT_2 = 'aabbbcccddeee';
    const SAMPLE_INPUT_3 = 'aabbccddeee';
    const SAMPLE_INPUT_4 = 'aAAbcdaabdd';
    const SAMPLE_INPUT_5 = 'aabbbccddddaaa';
    
    
    function main() {
        let result = findCharsWithMaxOccurrences(SAMPLE_INPUT_1);
        console.log(result);
        result = findCharsWithMaxOccurrences(SAMPLE_INPUT_2);
        console.log(result);
        result = findCharsWithMaxOccurrences(SAMPLE_INPUT_3);
        console.log(result);
        result = findCharsWithMaxOccurrences(SAMPLE_INPUT_4);
        console.log(result);
        result = findCharsWithMaxOccurrences(SAMPLE_INPUT_5);
        console.log(result);
    }
  
    function findCharsWithMaxOccurrences(word) {
      /**
      * YOUR CODE HERE
      */
      let map = new Map();
      let array = [];
      let maxNumber = 0;
      for (let i=0; i < word.length; i++) {
        let number = 1;
        if (map.has(word[i])) {
          number += map.get(word[i]);
        }
        map.set(word[i], number);

        if (number > maxNumber) {
          maxNumber = number;
          array = [word[i]];
        } else if (number === maxNumber) {
          array.push(word[i]);
        }
      }

      return array;
    }
    
    main();
  })()