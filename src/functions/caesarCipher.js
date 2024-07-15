export default function caesarCipher(text, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let index = alphabet.indexOf(char.toLowerCase());

    if (index === -1) result += char;

    if (index !== -1) {
      let newIndex = (index + shift) % 26;
      if (char === char.toUpperCase()) {
        result += alphabet[newIndex].toUpperCase();
      } else {
        result += alphabet[newIndex];
      }
    }
  }
  return result;
}
