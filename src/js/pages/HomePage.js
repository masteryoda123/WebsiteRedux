import React from 'react';

import Page from './Page';

const styles = {
		homePage: {
			transition: "opacity 5s ease"
		},
		title: {
			color: "white",
			fontSize: "3vw"			
		},
		fullname: {
			color: "white",
			fontSize: "12vw",
			paddingTop: "8vw"	
		},
	}

export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    		return (
				<div>
					<div style={styles.fullname}>
						<p style={{textAlign:"center"}}>Yuda Winata</p>
					</div>
					<div style={styles.title}>
						<p style={{textAlign:"center"}}>Software and Web Developer</p>
						<p style={{textAlign:"center"}}>Information Security Enthusiast</p>
					</div>
				</div>
			);
	}
}
