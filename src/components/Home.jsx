import { PokemonApi } from '../context/pokemonApi';
import { useState } from 'react';
import Card from './Card';
import { SearchBar } from './SearchBar';
import Loading from './Loading';

export const Home = () => {
	const [searchItems, setSearchItems] = useState(null);
	const { getPokemon, loading, error } = PokemonApi();

	const handleSearch = async (searchValue) => {
		console.log(searchValue);
		const newItems = await getPokemon(searchValue);
		console.log(newItems);
		setSearchItems(newItems);
	};
	return (
		<div>
			<h1 className="text-2xl"> Welcome to Pokemon </h1>
			<p> You can search with pokenames </p>
			<SearchBar onSearch={handleSearch} />
			{loading && <Loading />}
			{error && <p className="text-red-500">{error}</p>}
			{searchItems && <Card pokemon={searchItems} />}
		</div>
	);
};
