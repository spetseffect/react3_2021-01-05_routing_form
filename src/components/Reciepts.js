import React from 'react';

export class Reciepts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reciepts: this.props.data
		};
	}

	render() {
		let recList = this.state.reciepts.map((item, index) => {
			return (
				<li key={index} >
					<h3>"{item.name}"</h3>
					<h4>Ингредиенты</h4>
					<ul>
						{item.ingredients.map((ing, i) => {
							return (
								<li key={i}>
									{ing.name} - {ing.count}
								</li>
							);
						})}
					</ul>
					<h4>Приготовление</h4>
					<p>{item.cooking}</p>
				</li>
			);
		});
		return (<>
			<h2>Рецепты</h2>
			<ul>{recList}</ul>
			<hr />
		</>);
	}
}