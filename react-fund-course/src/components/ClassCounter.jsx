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
        this.setState({count: this.state.count + 1}) // this.setState. Этот метод не нужно создавать в нашем классе - он наследуется от класса React.Component и доступен в любом компоненте по умолчанию. С помощью этого метода мы сможем поменять значение this.state.count, вот так: this.setState({count: this.state.count + 1}).
      }
    
    dec () {
        this.setState({count: this.state.count - 1})
      }

    render(){
        return(
            <div>
                <h1>Классовый компонент</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.inc}>Увеличить</button> {/*this используется только в классовых компонентах*/ }
                <button onClick={this.dec}>Уменьшить</button>
            </div>
        )
    }
}

export default ClassCounter;