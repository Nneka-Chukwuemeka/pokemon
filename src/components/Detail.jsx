import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonApi } from '../context/pokemonApi';
import Loading from './Loading';
//import Card from "./Card";

function Detail() {
	const { name } = useParams();
	const [pokemon, setPokemon] = useState(null);
	const { getPokemon, loading, error } = PokemonApi();

	useEffect(() => {
		const getPokemonData = async () => {
			const ans = await getPokemon(name);
			setPokemon(ans);
		};
		getPokemonData();
	}, [name]);
	if (loading) return <Loading />;
	if (error) return <p> {error} </p>;
	if (!pokemon) return <p> {error} </p>;

	return (
		<div>
			<h2> {name} Details</h2>
			<div>
				<p>Height: {pokemon.height}</p>
				<p>Weight: {pokemon.weight}</p>
				<p>
					Types:{' '}
					{pokemon.types.map((type) => type.type.name).join(', ')}
				</p>
			</div>
		</div>
	);
}

export default Detail;
