// Quick Question #1
new Set([1, 1, 2, 2, 3, 4]); // returns [1,2,3,4]

// Quick Question #2
[...new Set('referee')].join(''); // returns 'ref'

// Quick Questions #3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false); // returns {0: Array(3)=>true,1: Array(3)=>false};

// hasDuplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// vowelCount
function checkVowel(letter) {
   return 'aeiou'.includes(letter);
}
const vowelCountMap = (string) => {
   let vowelMap = new Map();
   for (let letter of string) {
      let lowerLetter = letter.toLowerCase();
      if (checkVowel(lowerLetter)) {
         if (vowelMap.has(lowerLetter)) {
            vowelMap.set(lowerLetter, vowelMap.get(lowerLetter) + 1);
         } else {
            vowelMap.set(lowerLetter, 1);
         }
      }
   }
   return vowelMap;
};
