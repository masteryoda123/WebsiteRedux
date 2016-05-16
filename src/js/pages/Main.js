import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import ReactTransitionGroup from 'react-addons-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux'

import Page from './Page';
import HomePage from './HomePage';
import AboutMe from './AboutMe';

//import Navbar from '../components/layout/Navbar';
import CustomLink from '../components/CustomLink';



const styles = {
		title: {
			color: "white",
			fontSize: "3vw"			
		},
		fullname: {
			color: "white",
			fontSize: "12vw",
			paddingTop: "8vw"	
		},
		background: {
			position: "fixed",
			width: "100%",
			height: "auto",
			pointerEvents: "none",
			zIndex: -99
		},
		navbar: {
			backgroundColor: "rgba(0,0,0,0.4)",
			borderWidth: 0,
			fontSize: "1.2vw"
		}
	}


class BackgroundImage extends React.Component {
	render() {
		return (
				<div>
					<img src="./images/backgroundImage1.jpg" style={styles.background} />
				</div>
			);
	}
}

class TopNavbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<Navbar style={styles.navbar} inverse fixedTop>
					<Navbar.Header>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
					    <Nav pullRight>

	      					<li><CustomLink to="HomePage">Home</CustomLink></li>
	      					<li><CustomLink to="AboutMe">About Me</CustomLink></li>
	      					<li><CustomLink to="Resume">Resume</CustomLink></li>
	      					<li><CustomLink to="Projects">Projects</CustomLink></li>
	      					<li><CustomLink to="ContactMe">Contact Me</CustomLink></li>


					    </Nav>
				    </Navbar.Collapse>
			    </Navbar>
			);
	}
}

export default class Main extends React.Component {

	constructor(props) {
		super(props);

		this.pages = {
			HomePage: <HomePage ref="HomePage"/>,
			AboutMe: <AboutMe ref="AboutMe"/>
		};

		this.state = {
			page: this.pages.HomePage
		};
	}

	render() {
		return (
			<div>
				<BackgroundImage />
				<TopNavbar />
                <Page />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
        return {
            pageName: state.pageName,
        }
}

const PageTest = connect(mapStateToProps)(Page)
