function countChars(str) {
  // Count letters or digits, case-insensitive
  str = str.toLowerCase();
  const counter = {};
  for (let char of str) {
    if (!counter[char]) {
      counter[char] = 1;
    } else {
      // char already appeared at least once
      counter[char] += 1;
    }
  }
  return counter;
}

function countDuplicates(counterObj) {
  const duplicates = [];
  for (const char in counterObj) {
    if (counterObj[char] > 1) {
      duplicates.push({ [char]: counterObj[char] });
    }
  }
  return duplicates;
}

//TODO: printing function
function printDuplicates(arrOfDuplicates) {
  console.log(arrOfDuplicates);
  for (let duplicateChar of arrOfDuplicates) {
    console.log(`${duplicateChar}`);
  }
}

console.log(countDuplicates(countChars("aabcccdD21")));
// printDuplicates(countDuplicates(countChars("aabcccdD21")));
