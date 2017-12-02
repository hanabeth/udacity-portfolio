import React, {Component} from 'react';
import Header from './components/header';
import FeaturedWork from './components/featured-work';
import Footer from './components/footer';
import './css/portfolio.css';

class Portfolio extends Component {
	render() {
		return (
			<div className="porfolio-wrapper">
				<Header
					name="Hana Johnson"
					position="Software Developer"
				/>
				<span className="section-border" />
				<img src="https://avatars3.githubusercontent.com/u/8824449?s=460&v=4"
						id="personal-image"
						alt="Hana Johnson"
				/>
				<section className="featured-work-wrapper">
					<FeaturedWork />
				</section>
				<Footer />
			</div>
		);
	}
}

export default Portfolio;