export function charToCode(char) {
  let charResponse = "";

  for (let i = 0; i < char.length; i++) {
    switch (char.charAt(i).toLowerCase()) {
      case "q":
        charResponse += "/";
        break;
      case "w":
        charResponse += "?";
        break;
      case "e":
        charResponse += "°";
        break;
      case "r":
        charResponse += "®";
        break;
      case "t":
        charResponse += "ŧ";
        break;
      case "y":
        charResponse += "←";
        break;
      case "u":
        charResponse += "↓";
        break;
      case "i":
        charResponse += "→";
        break;
      case "o":
        charResponse += "ø";
        break;
      case "p":
        charResponse += "þ";
        break;
      case "a":
        charResponse += "æ";
        break;
      case "s":
        charResponse += "ß";
        break;
      case "d":
        charResponse += "ð";
        break;
      case "f":
        charResponse += "đ";
        break;
      case "g":
        charResponse += "ŋ";
        break;
      case "h":
        charResponse += "ħ";
        break;
      case "k":
        charResponse += "ĸ";
        break;
      case "l":
        charResponse += "ł";
        break;
      case "z":
        charResponse += "«";
        break;
      case "x":
        charResponse += "»";
        break;
      case "c":
        charResponse += "©";
        break;
      case "v":
        charResponse += "“";
        break;
      case "b":
        charResponse += "”";
        break;
      case "n":
        charResponse += "n";
        break;
      case "m":
        charResponse += "µ";
        break;
      case ",":
        charResponse += "─";
        break;
      case ".":
        charResponse += "·";
        break;
      case "!":
        charResponse += "¹";
        break;
      case " ":
        charResponse += " ";
        break;
      // case 'j':      return ''
    }
  }

  return charResponse;
}
