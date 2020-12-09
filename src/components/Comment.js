import React from 'react';
import './Comment.css';

const mainUrl = 'https://hacker-news.firebaseio.com';

const Comment = ( {text} ) => {
	return (
		<div className="comments__first-items">{text.text}</div>
	)
}

// class Comment extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			text: null,
// 			fetched: false
// 		}


// 	}

// 	componentDidMount () {
// 		this.fetchComment();
// 		console.log(this.props)
//   }

// 	fetchComment = async() => {
// 		const comment = await fetch(`${mainUrl}/v0/item/${this.props.commentId}.json?print=pretty`).then(data => data.json());
// 		console.log('Полученный коммент', comment)
// 		this.setState({ text: comment.text, fetched: true });

		
		
// 	}

// 	render() {
// 		const { fetched, text } = this.state;

// 		return(
// 			<>
// 				{this.state.fetched ? <p>{text}</p> : <p>Загружаю комментарий</p>}
// 			</>
// 		)
// 	}




// }

export default Comment;