function splitPascalCase(inputString) {
    let resultArray = inputString.split(/(?=[A-Z])/);
    let resultString = resultArray.join(', ');
    console.log(resultString);
  }
  splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');