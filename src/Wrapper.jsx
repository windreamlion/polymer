/**
 * Created by lion on 10/18/16.
 */

/*

 */


import React, {PropTypes, Component} from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
// import TweenMax from "gsap";

import {palette} from './style';

function getStyles(props, state) {

    return {
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: state.hoverColor
        }
    };
}


class Wrapper extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {};

    state = {
        hoverColor: '#fff'
    };


    componentWillMount() {
        // console.log('component-Will-Mount')
        this.init();
    }

    //@Render()

    componentDidMount() {
        // console.log('component-Did-Mount')
    }

    componentWillReceiveProps(nextProps) {
        // console.log('component-Will-ReceiveProps');

    }

    shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    //@Render()

    componentWillUpdate() {
        // console.log('component-Will-Update')
    }

    componentDidUpdate() {
        // console.log('component-Did-Update')
    }

    componentWillUnmount() {
        // console.log('component-Will-Unmount')
    }

    init() {
    }

    fadeIn() {
    }

    fadeOut() {
    }

    onActive(e) {
        // if(e.type=="")
        console.log(e.type);
        this.setState({hoverColor: palette[0]})
    }

    onDeactive(e) {
        console.log(e.type);
        this.setState({hoverColor: '#fff'})
    }


    render() {

        console.log('loading:Render')

        const styles = getStyles(this.props, this.state);

        // let element = <div ref={(ref)=> this.container = ref}
        //                    style={styles.container}
        //                    {/*onTouchStart={::this.onActive}*/}
        //                    {/*onTouchMove={::this.onActive}*/}
        //                    {/*onTouchEnd={::this.onDeactive}*/}
        //                    onMouseOver={::this.onActive}
        //                    onMouseEnter={::this.onActive}
        //                    onMouseOut={::this.onDeactive}
        //                    onMouseLeave={::this.onDeactive}
        // />;

        let element = <div ref={(ref)=> this.container = ref}
                           style={styles.container}
                           onTouchStart={::this.onActive}
                           onMouseOver={::this.onActive}
                           onMouseEnter={::this.onActive}
                           onMouseOut={::this.onDeactive}
                           onMouseLeave={::this.onDeactive}
                           onClick={::this.onActive}
                           onTouchEnd={::this.onDeactive}
        ></div>;

        return (
            <div style={{height:'100%'}}>
                {element}
            </div>
        );
    }
}

export  default  Wrapper;


 