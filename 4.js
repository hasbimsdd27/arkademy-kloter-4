function cetakGambar(batas){
    let result = '';
    if (batas%2==0){
        result='Angka yang dapat dimasukkan hanya angka ganjil';
    }else{
        for (let i=1;i<=batas;i++){
            for (let j=1;j<=batas;j++){
                if(j==1){
                    result+='* '
                }else if(j==batas){
                    result+='*\r\n'
                }else if(i== Math.round(batas/2)){
                    result+='* '
                }else{
                    result+='= '
                }
            }
        }
    }
    return result;
}

console.log(cetakGambar(9));