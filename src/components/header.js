import React from 'react';
import PropTypes from 'prop-types';
import '../css/header.css';

const Header = ({name, position}) => {
	return (
		<header className="header-wrapper">
			<h1 className="name-header">
				{name}
			</h1>
			<h3 className="position-header">
				{position}
			</h3>
		</header>
	);
};

Header.propTypes = {
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired
};

export default Header;