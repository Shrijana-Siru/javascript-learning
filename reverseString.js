function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
  const string = "PIHSNRETNI HCET ETAVONNI";
  const result = reverseString(string);

  document.getElementById("ReverseString").innerHTML = result;