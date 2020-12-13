import React from 'react';
import '../styles/Comment.css';
import SubCommentsList from './SubCommentsList';
import arrow from '../images/angle-arrow-down.svg';

class Comment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasChild: false,
			isCliked: false
		}
	}

	componentDidMount() {
		this.checkedChild();
	}

	checkedChild = () => {		
		{this.props.text.kids === undefined ? this.setState({ hasChild: false }) : this.setState({ hasChild: true })}
	}

	handleClick = () => {
		this.state.hasChild && this.setState({ isCliked: true })
	}

	render() {
		const { text } = this.props;	
		const commentText = text.text;

		return (
			<>
				<div className="comments__wrap" onClick={this.handleClick}>
					{text.deleted 
						? <div className="comments__first-items comments__first-items_deleted">*Sorry, this comment has been deleted</div>
						: <div className="comments__first-items" dangerouslySetInnerHTML={{__html: commentText}} />
					}	

					{this.state.hasChild && <img src={arrow} width="20" className="comments__arrow" />}				
				</div>
				{this.state.isCliked && <SubCommentsList comments={this.props.text.kids} /> }
			</>
		)
	}
}

export default Comment;