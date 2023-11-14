function modernTimesOfHashTag(text ){
    let words = text.split(' ');
    let hashWord = words.filter(word => word.startsWith('#') && word.length > 1);

    for(let word of hashWord){
        word = word.slice(1);
        let isValid = true;
         
        for(let char of word){
            if(!/[A-Za-z]/.test(char)){
                isValid = false;
                break;
            }
        }
        if(isValid){
            console.log(word);
        } 
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');