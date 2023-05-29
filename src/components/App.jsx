import React, { useState, useEffect } from "react";
import "../App.css"
import searchIcon from "../search.svg"
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?apikey=d5fb412b'

function App() {


    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Batman");
    }, [])


    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <img
                    src={searchIcon}
                    onClick={() => searchMovies(searchTerm)}
                    alt="Search Icon"
                />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    )

}

export default App;