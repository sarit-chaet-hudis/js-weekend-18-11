function organize(s1, s2) {
  const charSet = new Set(s1.concat(s2));
  return Array.from(charSet).sort().join("");
}

console.log(organize("dkjhfskdfssss", "taaaa"));
