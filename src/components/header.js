import React from 'react';
import PropTypes from 'prop-types';
import '../css/header.css';

const Header = ({name, position}) => {
	return (
		<header className="header-wrapper">
			<img id="header-logo" src="https://i.imgur.com/r4bLxLW.png" alt="logo" />
			<h1 className="name-header">
				{name}
			</h1>
			<p id="professional-position">
				{position}
			</p>
		</header>
	);
};

Header.propTypes = {
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired
};

export default Header;