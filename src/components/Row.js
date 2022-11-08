import React, { useState, useEffect } from "react";
import "../style/row.css";
import axios from "../axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);


  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="row">
      <h2>{title}</h2>
      
      <Slider {...settings}>
      {movies.map((movie) => {
        return (
          <div className="card">
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
          <h4>{movie.title}</h4>
          <div className="movie-info"><p>{movie.vote_average}</p><p>{movie.release_date}</p></div>
          </div>
        );
      })}
     
      </Slider>
      
    </div>
  );
}

export default Row;

// <div className="row_posters"> </div>