// application packages
const express = require('express')
const app = express()

const path = require('path')
// add template engine
const hbs = require('express-handlebars');
// setup template engine directory and files extensions
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
	extname: 'hbs',
	defaultLayout: 'main',
	layoutsDir: __dirname + '/views/layouts/'
}));
// setup static public directory
app.use(express.static('public'));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

const articleRoutes = require('./routes/article'); // import article route

// to use article routes
app.use('/', articleRoutes);
app.use('/article', articleRoutes)

// show articles by author
app.get('/author/:id', (req, res) => {
	let authorQuery = `SELECT name FROM author WHERE id = ${req.params.id}`
	let author
	let articlesQuery = `SELECT * FROM article WHERE author_id = ${req.params.id}`
	let articles
	//console.log()
	con.query(articlesQuery, (err, result) => {
		if (err) throw err;
		articles = result
	})
	con.query(authorQuery, (err, result) => {
		if (err) throw err;
		author = result
		res.render('author', {
			author: author,
			articles: articles
		})
	})
})

// app start point
app.listen(3000, () => {
	console.log('App is started at http://localhost:3000')
});