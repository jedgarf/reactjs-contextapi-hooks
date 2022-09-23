import React, { useState } from 'react';

function AddMovie({addMovie}) {

    const [movie, setMovie] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(movie);
        addMovie(movie);
        setMovie('');
    }

    const onChangleHandler = (e) => {      
        setMovie(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add Movie </label>
            <input type="text" value={movie} onChange={onChangleHandler} required/>
            <input type="submit" value="Add" className='btn-primary' />
        </form>
    );
}

export default AddMovie;