import React from 'react';

class ClassCounter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.inc = this.inc.bind(this); // bind - Метод предназначен для явной привязки контекста (this) к функции
        this.dec = this.dec.bind(this);
    }

    inc (){
        this.setState({count: this.state.count + 1})
      }
    
    dec () {
        this.setState({count: this.state.count - 1})
      }

    render(){
        return(
            <div>
                <h1>Классовый компонент</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.inc}>Увеличить</button>
                <button onClick={this.dec}>Уменьшить</button>
            </div>
        )
    }
}

export default ClassCounter;