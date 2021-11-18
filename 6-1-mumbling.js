function accum(str) {
  const strArray = str.split("");
  console.log(strArray);
  const result = [];
  strArray.forEach((char, index) => {
    result.push(char.toUpperCase() + char.toLowerCase().repeat(index));
  });
  return result.join("-");
}

console.log(accum("cwAT")); // mumble: "C-Ww-Aaa-Tttt"
