import React, {useState, useEffect} from 'react';
import '../assets/styles/components/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';



const App = () => {
    
    // Trasladamos esta lógica al Hooks useInitialState.js

    // const [ videos , setVideos ] = useState({ mylist: [], trends: [], originals: []});

    // useEffect(() =>{
    //     fetch('http://localhost:3000/initalState')
    //         .then(response => response.json())
    //         .then(data => setVideos(data));
    // }, []);

    

    const initialState = useInitialState(API);
    console.log(initialState);

    return  (
                <div className="app">
                    <Header />
                    <Search />
                    {/* 
                    
                    creo una validación para que en caso que mylist se encuentre
                    vacia este componente no se visualice

                    alguna ocasiones debemos validar que los datos no sean indefinidos 
                    para esto podemos controlar con la condición 

                    videos.myList !== undefined
                    
                    */}
                    {   initialState.mylist.length > 0 &&

                        <Categories title="Mi lista">
                        <Carousel>
                            {initialState.mylist.map(item =>
                                    <CarouselItem key={item.id} {...item}/>
                                )
                            }
                        </Carousel>
                        </Categories>

                    }

                    <Categories title="Tendencias">
                        <Carousel>
                            {initialState.trends.map(item =>
                                    <CarouselItem key={item.id} {...item}/>
                                )
                            }
                        </Carousel>
                    </Categories>

                    <Categories title="Originales">
                        <Carousel>
                            {initialState.originals.map(item =>
                                    <CarouselItem key={item.id} {...item}/>
                                )
                            }
                        </Carousel>
                    </Categories>

                    <Footer />
                </div>
            );
}

export default App;