import React from 'react';

export class RegForm extends React.Component {
	state = {
		nic: '',
		email: '',
		gender: '',
		date: '',
		phone: '',
		city: ''
	}
	submit = (event) => {
		event.preventDefault();
		console.log('NicName - ' + this.state.nic);
		console.log('Email - ' + this.state.email);
		console.log('Пол - ' + this.state.gender);
		console.log('Дата рождения - ' + this.state.date);
		console.log('Телефон - ' + this.state.phone);
		console.log('Город - ' + this.state.city);
	}
	changeHandler = (event) => {
		let name = event.target.name;
		let val = event.target.value;
		this.setState({ [name]: val });
	}
	render() {
		return (<>
			<h1>RegForm page</h1>
			<form onSubmit={this.submit}>
				<label htmlFor="nic">NicName</label>
				<input type="text"
					className="form-control"
					id="nic"
					name="nic"
					onChange={this.changeHandler}
					required />
				<label htmlFor="email">Email</label>
				<input type="email"
					className="form-control"
					id="email"
					name="email"
					placeholder="example@site.com"
					onChange={this.changeHandler}
					required />
				<div className="form-group">
					Пол<br />
					<label><input type="radio"
						name="gender"
						value="мужской"
						onChange={this.changeHandler} /> М</label><br />
					<label><input type="radio"
						name="gender"
						value="женский"
						onChange={this.changeHandler}
						required /> Ж</label>
				</div>
				<label htmlFor="date">Дата рождения</label>
				<input type="date"
					className="form-control"
					id="date"
					name="date"
					onChange={this.changeHandler}
					required />
				<label htmlFor="phone">Телефон (+380971234567)</label>
				<input type="tel"
					pattern="\+380\d{9}"
					placeholder="+380971234567"
					className="form-control"
					id="phone"
					name="phone"
					onChange={this.changeHandler}
					required />
				<label htmlFor="city">Город</label>
				<select className="form-control"
					id="city"
					name="city"
					onChange={this.changeHandler}
					required>
					<option value="">&lt;Выберите город&gt;</option>
					<option value="Киев">Киев</option>
					<option value="Одесса">Одесса</option>
					<option value="Львов">Львов</option>
					<option value="Житомир">Житомир</option>
					<option value="Черкассы">Черкассы</option>
				</select>
				<button className="btn btn-primary">Отправить</button>
			</form>
		</>);
	}
}