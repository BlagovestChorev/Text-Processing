function revealWords (wordStr, text){
     let words = wordStr.split(', ');

     for(let word of words){
        let starTemplate = '*'.repeat(word.length);

        text = text.replace(starTemplate, word);
     }
     console.log(text);

}
revealWords('great', 'softuni is ***** place for learning new programming languages');