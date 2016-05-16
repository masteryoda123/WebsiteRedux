import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import AboutMe from './AboutMe';

const ANIMATION_TIME = 500

const page = {
    HomePage: <HomePage />,
    AboutMe: <AboutMe />,
}

const transitionStyle = "opacity " + ANIMATION_TIME + "ms ease";

const style = {
        transition: transitionStyle, 
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        style,
                        page: page['HomePage'],
                    };
    }

    pageChangeHandler() {
        // listen to state change
        // when page state changes, it has to start the animation
        // when opacity is 0, unmount the component (asynchronously)
        // and mount the other component with opacity 0
        // increment opacity gradually.
        // Styling is passed in as a prop to the appropriate page child.
        // Each page needs to display with the appropriate styling
        // 
        // if (store.getState().page != this.state.page) {
        //     let interval = setInterval(animate, 10);
        //     function animate() {
        //         if (this.state.style.opacity == FULL && pagehaschanged) {
        //             clearInterval(interval);
        //         }
        //         if (opacity == 0) {
        //            unmountPage;
        //            mountPage;
        //         }
        //         if (oldpage)
        //           opacity -= 0.02;
        //           
        //         if (newpage)
        //           opacity += 0.02;
        //     }
        // 
    }

    animate(nextProps) {
            this.setState({style: {opacity: "0.01"}});
            setTimeout(() => {

                this.setState({
                    page: page[nextProps.pageName],
                    style: {opacity: "1"}
                });
            }, ANIMATION_TIME);
        }

    componentWillReceiveProps(nextProps) {
        this.animate(nextProps);
    }

    render() {
        return (
                <div style={Object.assign({}, style, this.state.style)}>
                    {this.state.page}
                </div>
            );
    }
}

const mapStateToProps = (state) => {
        return {
            pageName: state.pageName,
        }
}

export default connect(mapStateToProps)(Page)
