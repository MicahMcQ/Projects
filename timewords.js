
function timeWords(time) {
  const hours = Math.floor(time / 100);
  const minutes = time % 100;

  const hourWords = [
    'midnight',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'noon'
  ];

  const minuteWords = [
    'o\'clock',
    'oh one',
    'oh two',
    'oh three',
    'oh four',
    'oh five',
    'oh six',
    'oh seven',
    'oh eight',
    'oh nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty-one',
    'twenty-two',
    'twenty-three',
    'twenty-four',
    'twenty-five',
    'twenty-six',
    'twenty-seven',
    'twenty-eight',
    'twenty-nine',
    'thirty',
    'thirty-one',
    'thirty-two',
    'thirty-three',
    'thirty-four',
    'thirty-five',
    'thirty-six',
    'thirty-seven',
    'thirty-eight',
    'thirty-nine',
    'forty',
    'forty-one',
    'forty-two',
    'forty-three',
    'forty-four',
    'forty-five',
    'forty-six',
    'forty-seven',
    'forty-eight',
    'forty-nine',
    'fifty',
    'fifty-one',
    'fifty-two',
    'fifty-three',
    'fifty-four',
    'fifty-five',
    'fifty-six',
    'fifty-seven',
    'fifty-eight',
    'fifty-nine'
  ];

  let timeInWords = '';

  if (hours >= 0 && hours <= 12) {
    timeInWords += hourWords[hours];
    if (hourWords[hours] !== 'noon' && hourWords[hours] !== 'midnight') {
      timeInWords += ' ';
    }
  } else {
    timeInWords += 'Invalid hours ';
  }

  if (minutes >= 0 && minutes <= 59) {
    if (hourWords[hours] !== 'noon' && hourWords[hours] !== 'midnight') {
      timeInWords += minuteWords[minutes];
    }
  } else {
    timeInWords += 'Invalid minutes';
  }

  return timeInWords;
}

// Example usage
const inputTime = 1234;
const words = timeWords(inputTime);
console.log(words); // Output: "noon"
