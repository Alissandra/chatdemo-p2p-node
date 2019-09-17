var express = require('express');
var router = express.Router();
 
/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});


/*Isso quer dizer que, quando chegar uma requisição GET em /chat, renderizaremos a 
view chat.ejs. O resultado você confere abaixo, mandando rodar e acessando /chat no 
seu navegador:
*/
router.get('/chat', function(req, res){
  res.render('chat', {});
});

app.listen(process.env.PORT || 8080)

module.exports = router;



