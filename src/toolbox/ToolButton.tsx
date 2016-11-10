/**
 * Created by lion on 11/11/2016.
 */

import * as React from 'react';



function getStyles(props:any){
    return {
        button:{
            width:20,
            height:20,
            backgroundColor:'#f0f'
        }
    }
}

class ToolButton extends React.PureComponent<any,any>{

    constructor(props){
        super(props);
    }


    render() {
         return(
             <div style={getStyles(this.props).button}>ToolButts</div>
         )


    }
}

export default ToolButton;
