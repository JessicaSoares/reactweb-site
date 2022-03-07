import React from 'react';

export default class AreaTexto extends React.Component{

    render(){
        return(
            <div className={"AreaTexto " + this.props.classeSecundaria}>{this.props.texto}</div>
        );
    }
}