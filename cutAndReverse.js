function cutAndReverse (str){
    let halfIdx = str.length / 2;

    let leftHalf = str.slice(0, halfIdx).split('').reverse().join('');
    let rightHalf = str.slice(halfIdx).split('').reverse().join('');
    console.log(leftHalf);
    console.log(rightHalf);
}
//cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI'); 