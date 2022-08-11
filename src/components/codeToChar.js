export function codeToChar(code) {
  let charResponse = "";

  for (let i = 0; i < code.length; i++) {
    switch (code.charAt(i)) {
      case "?":
        charResponse += "w";
        break;
      case "/":
        charResponse += "q";
        break;
      case "°":
        charResponse += "e";
        break;
      case "®":
        charResponse += "r";
        break;
      case "ŧ":
        charResponse += "t";
        break;
      case "←":
        charResponse += "y";
        break;
      case "↓":
        charResponse += "u";
        break;
      case "→":
        charResponse += "i";
        break;
      case "ø":
        charResponse += "o";
        break;
      case "þ":
        charResponse += "p";
        break;
      case "æ":
        charResponse += "a";
        break;
      case "ß":
        charResponse += "s";
        break;
      case "ð":
        charResponse += "d";
        break;
      case "đ":
        charResponse += "f";
        break;
      case "ŋ":
        charResponse += "g";
        break;
      case "ħ":
        charResponse += "h";
        break;
      case "ĸ":
        charResponse += "k";
        break;
      case "ł":
        charResponse += "l";
        break;
      case "«":
        charResponse += "z";
        break;
      case "»":
        charResponse += "x";
        break;
      case "©":
        charResponse += "c";
        break;
      case "“":
        charResponse += "v";
        break;
      case "”":
        charResponse += "b";
        break;
      case "n":
        charResponse += "n";
        break;
      case "µ":
        charResponse += "m";
        break;
      case "─":
        charResponse += ",";
        break;
      case "·":
        charResponse += ".";
        break;
      case "¹":
        charResponse += "!";
        break;
      case " ":
        charResponse += " ";
        break;
      // case 'j':      return ''
    }
  }

  return charResponse;
}
