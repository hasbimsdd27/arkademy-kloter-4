function sequence(x,y){
    let result = '';
    let angka = '';
    let arrAngka = [];
    let max = Math.pow(x,y);
    let hasil = 10;
    let x1 = x-1;
    let y1 = y-1;
    if (x > y == false){
        result = 'x (angka pertama) harus lebih besar dari y (angka kedua)';
    }else{
      for(let i=-1; i <= max; i++){
        let x1=x+i;
        let y1=y+i;
        if(hasil === 0 || hasil === 1){
            break;
        }else if(i === -1){
              hasil = y;
              angka += y+'|';
        }else if(i===0){
              hasil = Math.pow(y,2)%x;
              angka += hasil +'|';
        }else{
            hasil = Math.pow(y1,2)%x1;
            angka += hasil +'|';
            }
        } 
    }
    result = angka.split('|');
    console.log('Array =');
    console.log(result);
    console.log('count =');
    console.log(result.length);
}
    
sequence(16,5);