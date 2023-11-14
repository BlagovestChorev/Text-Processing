function replaceRepeatingChars (str){
    let noRepeatStr = '';
    let prevChar = ''; 

    for(let curChar of str){
        if(curChar !== prevChar){
            noRepeatStr += curChar;
            prevChar = curChar;
        }
    }
    console.log(noRepeatStr);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');