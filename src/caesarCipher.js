export function ceasarCipher(str, shift) {
  let newString = "";
  for (const char of str) {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      newString += String.fromCharCode(((code - 65 + shift) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      newString += String.fromCharCode(((code - 97 + shift) % 26) + 97);
    } else {
      newString += char;
    }
  }
  return newString;
}
