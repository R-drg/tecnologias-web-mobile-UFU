import './App.css';
import Number from "./Number"
import React from "react";

class App extends React.Component {

  componentDidMount(){
    this.geraNumeros();
  }

  constructor(props){
    super(props);
    this.state ={
      numbers: [0,0,0,0,0,0]
    }
    this.geraNumeros = this.geraNumeros.bind(this);
  }

  geraNumeros() {
    function geraAleatorio(min,max){
      return Math.round( min + Math.random() * (max-min));
    }
    var nums = []
    for(var i=0;i<6;i++){
      var n=geraAleatorio(1,60)
      if (nums.includes(n)){
        i--;
      }
      else{
        nums.push(n);
      }
    }
    this.setState({
      numbers: nums
    })
  }

  render(){

    return (
      <div className="App">
        <div className="container">
          <h1 className="text">Gerador de numeros da mega-sena</h1>
            <div className="numbers">
              {this.state.numbers.map((num, i) => <Number key = {i} number = {num} />)}
            </div>
          <button className="generate" onClick={this.geraNumeros}>Gerar novos números</button>
        </div>
      </div>
    );
  }
}

export default App;
