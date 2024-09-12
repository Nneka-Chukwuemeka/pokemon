import PropTypes from 'prop-types';

function CardWrapper({ children }) {
	return (
		<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 overflow-0 w-full overflow-hidden">
			{children}
		</div>
	);
}

export default CardWrapper;
CardWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};
