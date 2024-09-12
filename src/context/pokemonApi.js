import { useState } from 'react';

import axios from 'axios';

const PokemonUrl = 'https://pokeapi.co/api/v2/';

export const PokemonApi = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const getPokemon = async (name) => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.get(
				`${PokemonUrl}${name.toLowerCase()}`
			);
			setLoading(false);
			return response.data;
		} catch (err) {
			setError('Error, Name Does not exist');
			setLoading(false);
			console.log(err);
			return null;
		}
	};
	return { getPokemon, loading, error };
};
