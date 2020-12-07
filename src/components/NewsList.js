import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';


const NewsList = ({ articles }) => (
	<div className="news">
		<div className="news__container">
			{articles.map((article) => {	
				// console.log(article.id)				
				return (
					<Link className="news__item" to={`/${article.id}`} key={article.id}>
						<NewsCard article={article} />
					</Link>
				)
			})}
		</div>
	</div>
);
// style={{ textDecoration: 'none', display: 'flex'}}
export default NewsList;

