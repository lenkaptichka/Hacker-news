import React from 'react';
import Comment from './Comment';
import './CommentsList.css'
import Spinner from './Spinner';

const mainUrl = 'https://hacker-news.firebaseio.com';



class CommentsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			texts: [],
			fetched: false
		}
	}

	componentDidMount () {
    this.fetchComment();
		console.log(this.props);
	}
	
	fetchComment = async() => {
		const comment = await Promise.all(
			this.props.comments.map(commentId => {
				return fetch(`${mainUrl}/v0/item/${commentId}.json?print=pretty`).then(data => data.json());
			})
		)

		this.setState({ texts: comment, fetched: true });

		
		
	}
	render() {
		const { fetched, texts } = this.state;
		return (
			<>
				{fetched ? 
					(<>
						<div className="comments">
							<h4 className="comments__title">Комментарии</h4>
							{texts.map(text => {
								return <Comment text={text} key={text.id} />
							})}
						</div>
					</>) : <p>Комментарии загружаются . . .</p>}


			</>


		)
	}



}

export default CommentsList;