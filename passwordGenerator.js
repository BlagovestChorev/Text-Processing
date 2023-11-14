function passwordGenerator (arr){
    let [str1, str2, replacementStr] = arr;
    let concatedStr = str1 + str2;
    let idx = 0;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let char of concatedStr){
        if(vowels .includes(char)){
            concatedStr = concatedStr.replace(char, replacementStr[idx].toUpperCase());
            idx ++;

            if(idx == replacementStr.length){
                idx = 0;
            }
        }
    }
    let password = concatedStr.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
passwordGenerator(['ilovepizza','ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);