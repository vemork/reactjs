 import { useState, useEffect } from 'react';

const useInitialState = (API) => {

    const [ videos , setVideos ] = useState({ mylist: [], trends: [], originals: []});

    useEffect(() =>{
        // accedemos al API por medio de la variable
        //de esta forma podemos usar cualquier API para ser consumida
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    return videos;
};

export default useInitialState;




