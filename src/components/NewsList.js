import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';
import '../styles/NewsList.css';

const NewsList = ({ articles }) => (
	<div className="news">
		<div className="news__container">
			{articles.map((article) => {					
				return (
					<Link className="news__item" to={`/${article.id}`} key={article.id}>
						<NewsCard article={article} />
					</Link>
				)
			})}
		</div>
	</div>
);

export default NewsList;

