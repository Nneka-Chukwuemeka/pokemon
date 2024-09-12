import Card from './Card';
import { usePokemonContext } from '../context/context';
import CardWrapper from './CardWrapper';

export const MyCards = () => {
	const { team } = usePokemonContext();

	return (
		<div>
			<h2> My Pokemon Cards</h2>
			{team.length === 0 ? (
				<p>You have nott added any Pokemon to your team yet.</p>
			) : (
				<CardWrapper>
					{team.map((pokemon) => (
						<Card
							key={pokemon.id}
							pokemon={pokemon}
							showActions={true}
						/>
					))}
				</CardWrapper>
			)}
		</div>
	);
};
