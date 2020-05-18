import React from 'react';

//start of my imports\\
import { Link, useRouteMatch } from 'react-router-dom'
const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  const {url} = useRouteMatch() //cant get this too work, gives an error. ended up hard coding /movies/ instead of using ${url} rip dynamic code. buddy dont kill me pls :L
  
  return (

    <div className="movie-card">

      
    {/* added Link component to card */}
      <Link to ={`/movies/${movie.id}`}>

      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>


      </Link>
      {/* end of Link component */}

      <h3>Actors</h3>

    
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
