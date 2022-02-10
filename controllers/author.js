const con = require('../utils/db');

// show articles by author
const getArticlesByAuthor = (req, res) => {
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
};

// export controller functions
module.exports = {
	getArticlesByAuthor
};