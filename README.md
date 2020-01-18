# arkademy-kloter-4

### Untuk nomor 1-5 dibuat dengan javascript sehingga untuk menjalankannya cukup ketikkan `node nomorsoal.js`

## Soal nomor 6a
Soal nomor 6a berikut adalah langkah langkah pembuatannya
database bisa di import dari file sql

### pembuatan database
![pembuatan database](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/buatdb.png)

### pembuatan tabel kategori 
![pembuatan tabel kategori](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/buat%20TbCategory.png)

### pembuatan tabel kasir 
![pembuatan tabel kasir](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/buatTbCashier.png)

### pembuatan tabel produk 
![pembuatan tabel product](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/buatTbProduk.png)

### penambahan data cashier 
![penambahan data cashier](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/tambahTbCashier.png)

### penambahan data category 
![penambahan data category](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/tambahTbCategory.png)

### penambahan data product
![penambahan data product](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/tambahTbProduct.png)

### berikut adalah query untuk nomor 6a
`select product.id, cashier.name, T.Category, T.name, T.price from (select product.id_cashier as cashier, product.name, category.name as category, product.price from product right join category on product.id_category = category.id) AS T inner join cashier on T.cashier = cashier.id order by cashier.id;`
![query nomor 6a](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/nomor6a.png)

## Untuk nomor 6b dan nomor 6c berikut adalah tampilan aplikasinya
![tampilan aplikasi](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/app1.png)
![tampilan aplikasi](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/app2.png)
![tampilan aplikasi](https://github.com/hasbimsdd27/arkademy-kloter-4/blob/master/Arkademy/app3.png)
