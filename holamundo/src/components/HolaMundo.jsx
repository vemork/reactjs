import React from 'react';

const HolaMundo = () => {
    const Hello = 'Hola Mundo';
    const isTrue = true;
    return(
        <div className="HolaMundo">
            <h1>Curso React</h1>
            <h2>{ Hello }</h2>
            <img src="data:image/jpeg;base64,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" alt=""/>
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Esto es falso</h5>}
            {isTrue && <h4>Soy Verdadero **</h4>}
        </div>
    );
};

export default HolaMundo;