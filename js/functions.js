const checkLength = (stringToCheck, maxLength) => stringToCheck.length <= maxLength;

checkLength('проверяемая строка', 20); // true
checkLength('проверяемая строка', 18); // true
checkLength('проверяемая строка', 10); // false


const isPalindrome = (stringToCheck) => {
  const formattedString = stringToCheck.replaceAll(' ', '').toLowerCase();
  return formattedString === formattedString.split('').reverse().join('');
};

isPalindrome('топот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс');  // false
isPalindrome('Лёша на полке клопа нашёл '); // true


const extractNumber = (stringToCheck) => {
  const newString = String(stringToCheck).match(/\d/g);
  if (!newString) {return NaN;}

  return parseInt(newString.join(''), 10);
};

extractNumber(2023); // 2023
extractNumber(-1);   // 1
extractNumber(1.5);  // 15
