import React, { useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import AddMovie from './AddMovie';
import { v4 as uuid } from 'uuid';

const Home = () => {

    const [movies, setMovies] = useState([
        { title: 'Superman', id: 1 },
        { title: 'Batman', id: 2 },
        { title: 'Jurassic Park', id: 3 },
        { title: 'Jumanji', id: 4, },
    ])

    const addMovie = (title) => {
        setMovies([
            ...movies,
            { title, id: uuid() }
        ]);
    }

    return ( 
        <ThemeContext.Consumer>{(themeContext) => {
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            return (
                <center>
                    <div className='movies'>
                        <ul className='movies-ul' style={{ background: theme.ui, color: theme.syntax }}>
                            {movies.map(movie => {                           
                                return(
                                    <li key={movie.id}>{movie.title}</li>
                                );
                            })}
                        </ul>
                        <AddMovie addMovie={addMovie} />
                    </div>
                </center>
            );
        }}</ThemeContext.Consumer>
    );
};

export default Home;