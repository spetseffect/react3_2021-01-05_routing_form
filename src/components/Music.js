import React from 'react';
import { musicList } from '../data/music';

export class Music extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			musList: musicList
		};
	}

	render() {
		let musList = this.state.musList.map((item, index) => {
			return (
				<li key={index} >
					<h3>"{item.name}"</h3>
					<h4>Состав группы</h4>
					<ul>
						{item.collective.map((c, i) => {
						return (
							<li key={i}>
								{c.name} - {c.role}
							</li>
						);
					})}
					</ul>
					<h4>Альбомы</h4>
					<ul>
						{item.albums.map((a, i) => {
						return (
							<li key={i}>
								"{a.name}" - {a.year}
							</li>
						);
					})}
					</ul>
				</li>
			);
		});
		return (<>
			<h2>Музыка</h2>
			<ul>{musList}</ul>
		</>);
	}
}