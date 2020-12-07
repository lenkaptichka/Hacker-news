import React from 'react';
import { useParams } from 'react-router-dom';
import './News.css';
import comment from './comment.svg';

const News = (props) => {
	console.log('props', props);
	const { articles } = props;
	console.log('articles', articles); 
	let { id } = useParams();

	// console.log('useParams', id, typeof(id));


	const article = articles.find(article => article.id == id)
	console.log(article);

	const timeFormat = new Date(article.time * 1000);
  const displayDate = `${timeFormat.getDate()}.${timeFormat.getMonth() + 1}.${timeFormat.getFullYear()}`;


	return (
		<>
			
			<div className="article">
				<div className="article__main-information">
					<h1 className="article__title">{article.title}</h1>
					<p className="article__date">{displayDate}</p>
				</div>
				<a href={article.url} className="article__link" target="_blank">{article.url}</a>
				<div className="article__about">
					<h3 className="article__author">{article.by}</h3>
					<div className="article__comment">
						<img src={comment} width="30" alt="comment icon" className="article__comment-icon" />
						<h4 className="article__comment-counter">{article.descendants}</h4>
					</div>
				</div>
			</div>
		</>

	)
}

export default News;



// class News extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			article: null
// 		}
// 	}

// 	findArticle() {
// 		const { articles } = this.props;
// 		let { id } = useParams();
// 		const publicArticle = articles.filter((article) => {
// 			article.id === id;
		
// 		});

// 		this.setState( {article: publicArticle });


// 	}

// 	render() {
// 		return (
// 			<h1>{id}</h1>
// 		)
// 	}
// }





