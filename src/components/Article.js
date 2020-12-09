import React from 'react';
// import { useParams } from 'react-router-dom';
import './Article.css';
import comment from './comment.svg';
import { NavLink } from 'react-router-dom';
import CommentsList from './CommentsList';
import Spinner from './Spinner';


const mainUrl = 'https://hacker-news.firebaseio.com';


class Article extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: null,
			article: null,
			timerId: null,
			fetched: false
		}
	}

	componentDidMount() {
    this.setPolling();
  }

  componentWillMount() {
    this.unsetPolling();
  }


  setPolling = async () => {
		await this.getArticleId();	
    this.fetchData();

    // const timerId = setInterval(this.fetchData, 60000); // Не забыть поменять обратно

    // this.setState({ timerId });
	}
	
	unsetPolling = () => {
    clearInterval(this.state.timerId);
	}
	
	fetchData = async () => {		
		const article = await fetch(`${mainUrl}/v0/item/${this.state.id}.json`).then(data => data.json());
		console.log('Полученная статья', article);
		this.setState({ article, fetched: true })
  }

	getArticleId() {
		this.setState({id: this.props.match.params.id});
		console.log('Значение id', this.state.id)
	}

	makeDateFormat(date) {
		const timeFormat = new Date(date * 1000);
		 const displayDate = `${timeFormat.getDate()}.${timeFormat.getMonth() + 1}.${timeFormat.getFullYear()}`;
		 return displayDate;
	}

	render() {
		const { fetched, article } = this.state;
		console.log('article!', article);
		
		return (
			<>
				{this.state.fetched ? (
				<>
					<div className="news-bar">
						<NavLink to="/" className="button__come-back">Вернуться на главную</NavLink>
						<button className="button__reload">Обновить</button>
					</div>

					<div className="article">
						<div className="article__main-information">
							<h1 className="article__title">{article.title}</h1>
							<p className="article__date">{this.makeDateFormat(article.time)}</p>
		 				</div>
						<a href={article.url} className="article__link" target="_blank">{article.url}</a>
						<div className="article__about">
							<h3 className="article__author">{article.by}</h3>
							<div className="article__comment">
								<img src={comment} width="30" alt="comment icon" className="article__comment-icon" />
								<h4 className="article__comment-counter">{article.descendants}</h4>
							</div>
						</div>
						<>
							{article.descendants > 0 ? <CommentsList comments={article.kids} /> : <p className="article__no-comments">Список комментариев пуст</p>}
						</>
						
					</div>
					
				</>) : <Spinner /> }

			</>
		)
		
	}
}

export default Article;




