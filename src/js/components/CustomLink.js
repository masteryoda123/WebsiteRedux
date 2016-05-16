import React from 'react';

import { connect } from 'react-redux'

const style = {
	cursor: "pointer"
}

export class CustomLink extends React.Component {

	constructor(props) {
		super(props);
		
		// this.state = {
		// 	dynamicStyle = {

		// 	}
		// };
	}

	render() {
		return (
			<a style={style} onClick={() => {this.props.onLinkClick(this.props.to)}}>
				{this.props.children}
			</a>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
        onLinkClick: (pageName) => {
                        dispatch({
                            type: 'PAGE_CHANGE',
                            pageName
                        })
                     }
})

export default connect(null, mapDispatchToProps)(CustomLink)

