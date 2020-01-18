function cek_kata(kata){
    const rgx = /^[a-z]{1,10}$/
    let jmlKata = 0;
    const arrKata = kata.toString().split(' ');
    const totKata = arrKata.length;
    for(i=0; i<=totKata-1; i++){
        if(rgx.test(arrKata[i])==true){
            jmlKata++;
        }
    }

    if (jmlKata === 0){
        return 'Data yang dimasukkan tidak valid';
    }else{
        return jmlKata+'/'+totKata;
    }    
}
console.log(cek_kata("1 hai apa kabar"));
console.log(cek_kata("123"));
console.log(cek_kata(123));
