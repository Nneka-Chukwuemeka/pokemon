import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(searchTerm);
	};

	return (
		<div className="mb-4">
			<form onSubmit={handleSubmit} className="flex mb-2">
				<input
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder="Search Pokemon name"
					className="border p-2 mr-2 flex-grow input-bordered bg-white"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded">
					Search
				</button>
			</form>
		</div>
	);
};

SearchBar.propTypes = {
	onSearch: PropTypes.func.isRequired,
};
