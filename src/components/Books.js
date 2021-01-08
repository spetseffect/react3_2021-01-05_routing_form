import React from 'react';

export class Books extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: this.props.data
		};
	}

	render() {
		let bookList = this.state.books.map((item, index) => {
			return (
				<li key={index} >
					<h3>"{item.name}" {item.avtor} ({item.pages}c./{item.genre})</h3>
					{item.review.map((r, i) => {
						return (
							<div key={i}>
								<h4>{r.avtor}</h4>
								<p>{r.text}</p>
							</div>
						);
					})}
				</li>
			);
		});
		return (<>
			<h2>Книги</h2>
			<ul>{bookList}</ul>
			<hr />
		</>);
	}
}