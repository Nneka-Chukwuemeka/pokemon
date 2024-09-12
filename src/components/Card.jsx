import { Link } from 'react-router-dom';
import { usePokemonContext } from '../context/Context.jsx';
import PropTypes from 'prop-types';

export default function Card({ pokemon, showActions = true }) {
	const { team, addToPokemonTeam, deleteATeam } = usePokemonContext();
	const itsFound = team.filter((p) => p.id === pokemon.id).length > 0;
	console.log(pokemon, itsFound);

	if (!pokemon.sprites) {
		return (
			<div className="card bg-base-100 w-96 shadow-xl text-white">
				<figure>
					<p> no image</p>
				</figure>
				<div className="card-body">
					<h3 className="card-title">
						{' '}
						{pokemon.name.toUpperCase()}
					</h3>
					<Link to={`/pokemon/${pokemon.name.toLowerCase()}`}>
						{console.log(pokemon.name.toLowerCase)}
						View Details
					</Link>
					{showActions && (
						<button
							onClick={() =>
								itsFound
									? deleteATeam(pokemon.name)
									: addToPokemonTeam(pokemon)
							}
							className={`mt-2 px-2 py-1 rounded ${
								itsFound ? 'bg-red-500' : 'bg-green-500'
							} text-white`}>
							{itsFound ? 'Remove from Team' : 'Add to Team'}
						</button>
					)}
				</div>
			</div>
		);
	}

	return (
		<div className="card bg-base-100 w-96 shadow-xl text-white">
			<figure>
				<img src={pokemon.sprites.front_default} alt={pokemon.name} />
			</figure>
			<div className="card-body">
				<h3 className="card-title"> {pokemon.name.toUpperCase()}</h3>
				<Link to={`/pokemon/${pokemon.name.toLowerCase()}`}>
					{' '}
					View Details
				</Link>
				{showActions && (
					<button
						onClick={() =>
							itsFound
								? deleteATeam(pokemon.name)
								: addToPokemonTeam(pokemon)
						}
						className={`mt-2 px-2 py-1 rounded ${
							itsFound ? 'bg-red-500' : 'bg-green-500'
						} text-white`}>
						{itsFound ? 'Remove from Team' : 'Add to Team'}
					</button>
				)}
			</div>
		</div>
	);
}

Card.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		sprites: PropTypes.object.isRequired,
	}).isRequired,
	showActions: PropTypes.bool.isRequired,
};
