import PropTypes from 'prop-types';

function CardWrapper({ children }) {
	return (
		<div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
			{children}
		</div>
	);
}

export default CardWrapper;
CardWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};
