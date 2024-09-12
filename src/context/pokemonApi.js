import { useState, useEffect } from 'react';

import axios from 'axios';

const PokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

export const PokemonApi = () => {
	const [allPokemon, setAllPokemon] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [result, setResult] = useState([]);

	useEffect(() => {
		const fetchAllPokemon = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await axios.get(PokemonUrl);
				setAllPokemon(response.data.results);
				setLoading(false);
			} catch (err) {
				setError('Failed to fetch Pokémon list');
				setLoading(false);
			}
		};

		fetchAllPokemon();
	}, []);

	const getPokemon = async (name) => {
		if (!name) {
			return [];
		}

		const filted = allPokemon.filter((pokemon) =>
			pokemon.name.toLowerCase().includes(name.toLowerCase())
		);
		setLoading(true);
		setError(null);
		try {
			const response = await axios.get(filted[0].url);
			setResult(response.data);
			setLoading(false);
			return response.data;
		} catch (err) {
			setError('Failed to fetch Pokémon list');
			setLoading(false);
			return err;
		}
	};
	return { allPokemon, getPokemon, result, loading, error };
};
