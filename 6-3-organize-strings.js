function organize(s1, s2) {
  // Takes 2 strings that only have letters. 
  // Return new sorted string without duplicates.
  
  const charSet = new Set(s1.concat(s2));
  return Array.from(charSet).sort().join("");
}

console.log(organize("dkjhfskdfssss", "taaaa"));
