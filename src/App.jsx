import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Home } from './components/Home';
import { PokemonProvider } from './context/context';
import Detail from './components/Detail';
import { MyCards } from './components/MyCards';
import Navbar from './components/Navbar';

function App() {
	return (
		<PokemonProvider>
			<div className="App ">
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pokemon" element={<MyCards />} />
					<Route path="/pokemon/:name" element={<Detail />} />
				</Routes>
			</div>
		</PokemonProvider>
	);
}

export default App;
