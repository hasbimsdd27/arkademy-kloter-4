function usernameValidity(str){
    const rgx = /^[a-z_0-9]{5,12}$/;
    return rgx.test(str);
}
function passwordValidity(str){
    const rgx1 = /[A-Z]$/s;
    const rgx2 = /[0-9]$/s;
    let huruf = 0;
    let angka = 0;
    let simbol = 0;
    let arrStr = str.split('');
    for(i=0; i<=arrStr.length;i++){
        if(rgx1.test(arrStr[i])==true){
            huruf+=1;
        }
        if(rgx2.test(arrStr[i])==true){
            angka+=1;
        }
    }
    if(huruf===5&&angka===1){
        return true;
    }else{
        return false;
    }
}

console.log(usernameValidity('fiona_mareta'));
console.log(usernameValidity('fionamareta99'));
console.log(usernameValidity('FIONA-mareta'));
console.log(passwordValidity('1WORLD!'));
console.log(passwordValidity('1WORL?!'));