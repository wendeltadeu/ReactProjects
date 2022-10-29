import React from "react";

  class UsuarioEntrada extends React.Component {
    constructor(){
        super()
        this.state={
            nome: ""
        }  
    }  

    alterarNome = (event) => {
      this.setState({nome: event.target.value})
    }
    
    render() {
      return (
        <div>
          <input type="text"
                 name="name"
                 value={this.state.nome}
                 onChange={this.alterarNome}
           />
           <p>Login: {this.state.nome}</p> 
           <p>Texto passado via Props</p>  
        </div>     
      );
    }
  }

  export default UsuarioEntrada;