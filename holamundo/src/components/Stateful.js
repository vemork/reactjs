import React, { Componet } from 'react';

class Stateful extends Componet {
    //añadir la lógica del componente
    constructor(props){
       //inicializamos propiedades con super
       super(props);
       //manejamos un estado
       this.state ={
           hello: 'Hola mundo'
       } 
    }
    render(){
        return (
            //<h1>Hola Mundo</h1>
            <h1>{ this.state.hello }</h1>
        )
    }
};

export default Stateful;