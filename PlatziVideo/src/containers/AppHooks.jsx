import React, {useState, useEffect} from 'react';
import '../assets/styles/components/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
    
    const [ videos , setVideos ] = useState({ mylist: [], trends: [], originals: []});

    useEffect(() =>{
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    console.log(videos);

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
                    {   videos.mylist.length > 0 &&

                        <Categories title="Mi lista">
                        <Carousel>
                            <CarouselItem />
                        </Carousel>
                        </Categories>

                    }

                    <Categories title="Tendencias">
                        <Carousel>
                            {videos.trends.map(item =>
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