let express = require('express');
let app = express();
//importing the express-handlebars modules
const exphbs = require('express-handlebars');

//configuring the express-handlebar modules
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

let PORT = process.env.PORT || 3007;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});