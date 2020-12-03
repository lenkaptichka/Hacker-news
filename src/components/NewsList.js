import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ articles }) => (
	<div className="news">
		<div className="news__container">
			{articles.map((article) => {					
				return <NewsCard article={article}
													key={article.id}
				/>
			})}
		</div>
	</div>
);

export default NewsList;