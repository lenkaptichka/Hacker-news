import React from 'react';
import '../styles/Article.css';
import comment from '../images/comment.svg';
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
			fetched: false,
			fetching: false
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
    const timerId = setInterval(this.fetchData, 60000);

    this.setState({ timerId });
	}
	
	unsetPolling = () => {
		clearInterval(this.state.timerId);
	}
	
	fetchData = async () => {		
		if (!this.state.fetching) {
			this.setState({ fetching: true });

			const article = await fetch(`${mainUrl}/v0/item/${this.state.id}.json`)
				.then(data => data.json());
			
			this.setState({ article, fetched: true, fetching: false })
		}
  }

	getArticleId() {
		this.setState({id: this.props.match.params.id});
	}

	makeDateFormat(date) {
		const timeFormat = new Date(date * 1000);
		 const displayDate = `${timeFormat.getDate()}.${timeFormat.getMonth() + 1}.${timeFormat.getFullYear()}`;
		 return displayDate;
	}

	render() {
		const { fetched, article, fetching } = this.state;
		
		return (
			<>
				{fetched 
					? (
					<>
						<div className="news-bar">
							<NavLink to="/" className="button__come-back">Back to homepage</NavLink>
							<button className="button__reload" disabled={fetching} onClick={this.fetchData}>Refresh</button>
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
								{article.descendants > 0 
								? <CommentsList comments={article.kids} />
								: <p className="article__no-comments">Comments list is empty</p>}
							</>						
						</div>					
					</>) 
					: <Spinner /> }
			</>
		)		
	}
}

export default Article;