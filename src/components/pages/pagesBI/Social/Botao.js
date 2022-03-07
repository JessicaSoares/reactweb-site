import React from 'react';

export default class Botao extends React.Component{

    render(){
        return(
            <div className="DivBotao">
                <button onClick={this.props.funcao} className="Botao">{this.props.valor}</button>
            </div>
        );
    }
}