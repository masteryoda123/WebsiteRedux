import React from 'react';

const styles = {
		homePage: {
			transition: "opacity 0.5s ease",
			opacity: "1.0"
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

export default class AboutMe extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
					<div style={styles.fullname}>
						<p style={{textAlign:"center"}}>About Me</p>
					</div>
			);
	}
}
