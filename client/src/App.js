import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';

//start of my imports\\
import { Route, Switch, Link } from 'react-router-dom'
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
//end of my imports\\


const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />


      {/* adding custom routes */}

<Switch> 


{/* 1 */}
{/* either use exact or rearrange order */}
      <Route path ='/' exact> 
          <MovieList movies = {movieList} />
      </Route>

{/* 2 */}
       <Route path ='/movies/:id'>
           <Movie />
       </Route>


</Switch>
        {/* end of custom routes */}



    </div>
  );
};

export default App;
