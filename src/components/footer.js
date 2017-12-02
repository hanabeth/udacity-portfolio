import React from 'react';
import PropTypes from 'prop-types';
import '../font-awesome-4.7.0/css/font-awesome.css';
import '../css/footer.css';

const Footer = ({name, position}) => {
	return (
		<article>
			<footer id="portfolio-footer">
				<nav id="contact-nav-footer">
					<a href="mailto:zencodecat@gmail.com" id="email-icon">
						<i class="fa fa-envelope" aria-hidden="true" />
					</a>
					<a href="https://github.com/hanabeth" id="github-icon">
						<i class="fa fa-github" aria-hidden="true" />
					</a>
					<a href="https://www.linkedin.com/in/hanabeth/" id="linkedin-icon">
						<i class="fa fa-linkedin" aria-hidden="true" />
					</a>
					<a href="https://www.instagram.com/zencodecat/" id="instagram-icon">
						<i class="fa fa-instagram" aria-hidden="true" />
					</a>
				</nav>
				<p id="footer-copyright">
					Copyright 2017 by Hana Johnson
				</p>
			</footer>
		</article>
	);
};

export default Footer;