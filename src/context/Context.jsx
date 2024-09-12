import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
	const prevTeam = () => {
		const allTeam = localStorage.getItem('pokemon');
		return allTeam ? JSON.parse(allTeam) : [];
	};
	const [team, setTeam] = useState(prevTeam);

	useEffect(() => {
		localStorage.setItem('pokemon', JSON.stringify(team));
	}, [team]);

	const addToPokemonTeam = (newTeam) => {
		if (
			team.length < 6 &&
			!team.find((value) => value.name === newTeam.name)
		) {
			setTeam([...team, newTeam]);
		}
	};

	const deleteATeam = (teamName) => {
		setTeam(team.filter((value) => value.name !== teamName));
	};

	return (
		<PokemonContext.Provider
			value={{ team, addToPokemonTeam, deleteATeam }}>
			{children}
		</PokemonContext.Provider>
	);
};
export const usePokemonContext = () => useContext(PokemonContext);

export default PokemonContext;
PokemonProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
