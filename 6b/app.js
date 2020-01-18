const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/',(req, res)=> {
    let dataJudul = 'Main Menu';
    res.render('index',{dataJudul});
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});