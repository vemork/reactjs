import React from 'react';

class ButtonFul extends React.Component {
    //creamos el objeto state con la propiedad count inicializada en 0
    state = {count: 0,}
    //se crea la funcion par actualizar el objeto state y su propiedad
    handleClick = () =>  {
        // this.setState = ({
        //     count: this.state.count + 1,
        // })
        this.setState(state => ({
            count: this.state.count + 1,
          }));
    }
    render(){
        const { count } = this.state;
        return(
            <div>
                <h1>Manzanas: { count }</h1>
                <button onClick={this.handleClick}>
                    Agregar
                </button>
            </div>
        );
    }
}

export default ButtonFul;