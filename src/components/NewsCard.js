import React from 'react';
import star from '../images/star.svg';
import '../styles/NewsCard.css'

const NewsCard = ({ article }) => { 
  const timeFormat = new Date(article.time * 1000);
  const displayDate = `${timeFormat.getDate()}.${timeFormat.getMonth() + 1}.${timeFormat.getFullYear()}`;

  return (
    <>
      <p className="news__date">{displayDate}</p>
      <h2 className="news__title">{article.title}</h2>
      <div className="news__information">
        <h3 className="news__author">{article.by}</h3>
        <div className="news__rating">
          <img className="news__rating-icon" src={star} width="20" alt="" />
          <h4 className="news__rating-value">{article.score}</h4>
        </div>
      </div>
    </>
  );
}

export default NewsCard;