const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const dbConn = require('./lib/mysql/connection.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/',(req, res)=> {
    let dataJudul = 'Main Menu';
    dbConn.query('Select * from category', (err,data)=>{
        dataCategory = data
    })
    dbConn.query('select  T.id, cashier.name as cashier, T.Category, T.name, T.price from (select product.id, product.id_cashier as cashier, product.name, category.name as category, product.price from product right join category on product.id_category = category.id) AS T inner join cashier on T.cashier = cashier.id order by T.id;', (err, data)=>{
        dataProduct = data
    })
    dbConn.query('Select * from cashier', (err,data)=>{
        res.render('index', {dataCashier: data, dataJudul, dataProduct, dataCategory});
    })
})

app.get('/add', (req,res)=>{
    res.redirect('/')
})

app.post('/create', (req,res)=>{
    const {id_cashier, id_category, name, price} = req.body;
    dbConn.query('INSERT INTO product set ?',{id_cashier, id_category, name, price}, (err)=>{
        if (err) throw err;
        res.redirect('/');
    })
})

app.get('/delete', (req, res) =>{
    const {id} = req.query;
    dbConn.query("DELETE FROM product WHERE id="+id, (err)=>{
        if (err) throw err;
        res.redirect('/');
    });
})

app.post('/edit', (req, res)=>{
    const {id, id_cashier, id_category, name, price} = req.body;
    dbConn.query("UPDATE product SET id_cashier='"+id_cashier+"', id_category='"+id_category+"', name='"+name+"', price="+price+" WHERE id="+id+';', (err)=>{
        if (err) throw err;
        res.redirect('/');
    });
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});