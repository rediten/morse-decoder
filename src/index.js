const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let arrOutput = [];
  let temp = '';
  for (let i = 0; i < expr.length; i++) {
    temp += expr[i];
    if (temp.length === 10) {
      arr1.push(temp);
      temp = '';
    }
  }

  for (let i = 0; i < arr1.length; i++) {
         if (arr1[i] === '**********')  arr2.push(' ');
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] - 1 === 0) {
        arr2.push(arr1[i].substring(arr1[i].indexOf(arr1[i][j]), 10));
        break;
      } 
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i].replace(/11/gi, '-'));
  }

  for (let i = 0; i < arr3.length; i++) {
    arr4.push(arr3[i].replace(/10/gi, '.'));
  }

  for (let i = 0; i < arr4.length; i++) {
     if (arr4[i] === ' ') arrOutput.push(' ');
     for (var prop in MORSE_TABLE) {
       if (arr4[i] === prop) arrOutput.push(MORSE_TABLE[arr4[i]]);
     }
  }
  return arrOutput.join('');
}

module.exports = {
    decode
}
