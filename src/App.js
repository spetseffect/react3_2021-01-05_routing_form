import logo from './logo.svg';
import './App.css';
import { Books } from './components/Books';
import { booksList } from './data/books';
import { Music } from './components/Music';
import { musicList } from './data/music';
import { Reciepts } from './components/Reciepts';
import { reciepts } from './data/reciepts';

function App() {
	return (
		<div className="App">
			<Books data={booksList} />
			<Music data={musicList} />
			<Reciepts data={reciepts} />
		</div>
	);
}

export default App;
