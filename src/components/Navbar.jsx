import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="navbar ">
			<div className="flex-1">
				<Link to="/" className="text-2xl font-bold">
					Pokemon
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/pokemon" className="text-xl font-bold">
							My Pokemon
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
