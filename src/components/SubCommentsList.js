import React from 'react';
import SubComment from './SubComment';

const mainUrl = 'https://hacker-news.firebaseio.com';


class SubCommentsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			texts: [],
			fetched: false
		}	
	}

	componentDidMount () {
    this.fetchComment();
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
				{fetched 
					? (<>
						{texts.map(text => {
							return <SubComment text={text} key={text.id} />
						})}
					</>) 
					: <p>Comments are loading . . .</p>
				}
			</>
		)		
	}
}

export default SubCommentsList;