import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CardMovie from "../../../Components/Card-Movie/CardMovie";

const Shows = () => {
  const [data, setData] = useState([]);
  const displayedData = data.slice(0, 6);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://movies-api14.p.rapidapi.com/home",
        headers: {
          "X-RapidAPI-Key":
            "5b56e76766msh7d6c5d00f3a1dcap14031fjsn4bdd19800a0a",
          "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <section id="MovieRecomendation">
      <div className="container my-5">
        {/* trending */}
        <div className="row mt-4">
          <div className="col-12">
            {data.length > 0 && (
              <div className="title-movie mb-2">
                <h4>{data[0].title}</h4>
              </div>
            )}
          </div>

          {displayedData.length > 0 &&
            displayedData.map((movie, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                <CardMovie
                  img={movie.movies && movie.movies[0].poster_path}
                  text={movie.movies && movie.movies[0].overview}
                />
                <div className="desc-film">
                  <h6>{movie.movies && movie.movies[0].original_title}</h6>
                </div>
              </div>
            ))}
        </div>

        {/* new */}
        <div className="row mt-4">
          <div className="col-12">
            {data.length > 0 && (
              <div className="title-movie mb-2">
                <h4>{data[1].title}</h4>
              </div>
            )}
          </div>

          {displayedData.length > 0 &&
            displayedData.map((movie, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                <CardMovie
                  img={movie.movies[1].poster_path}
                  text={movie.movies[1].overview}
                />
                <div className="desc-film">
                  <h6>{movie.movies[1].original_title}</h6>
                </div>
              </div>
            ))}
        </div>

        {/* trending */}
        <div className="row mt-4">
          <div className="col-12">
            {data.length > 0 && (
              <div className="title-movie mb-2">
                <h4>{data[2].title}</h4>
              </div>
            )}
          </div>

          {displayedData.length > 0 &&
            displayedData.map((movie, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                <CardMovie
                  img={movie.movies[2].poster_path}
                  text={movie.movies[2].overview}
                />
                <div className="desc-film">
                  <h6>{movie.movies[2].original_title}</h6>
                </div>
              </div>
            ))}
        </div>

        {/* trending */}
        <div className="row mt-4">
          <div className="col-12">
            {data.length > 0 && (
              <div className="title-movie mb-2">
                <h4>{data[3].title}</h4>
              </div>
            )}
          </div>

          {displayedData.length > 0 &&
            displayedData.map((movie, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                <CardMovie
                  img={movie.movies[3].poster_path}
                  text={movie.movies[3].overview}
                />
                <div className="desc-film">
                  <h6>{movie.movies[3].original_title}</h6>
                </div>
              </div>
            ))}
        </div>

        {/* trending */}
        <div className="row mt-4">
          <div className="col-12">
            {data.length > 0 && (
              <div className="title-movie mb-2">
                <h4>{data[4].title}</h4>
              </div>
            )}
          </div>

          {displayedData.length > 0 &&
            displayedData.map((movie, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                <CardMovie
                  img={movie.movies[4].poster_path}
                  text={movie.movies[4].overview}
                />
                <div className="desc-film">
                  <h6>{movie.movies[4].original_title}</h6>
                </div>
              </div>
            ))}
        </div>

        {/* trending Shows */}
        <div className="row mt-4">
          <div className="col-12">
            {data.length > 0 && (
              <div className="title-movie mb-2">
                <h4>{data[5].title}</h4>
              </div>
            )}
          </div>

          {displayedData.length > 0 &&
            displayedData.map((movie, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                <CardMovie
                  img={movie.movies[5].poster_path}
                  text={movie.movies[5].overview}
                />
                <div className="desc-film">
                  <h6>{movie.movies[5].original_title}</h6>
                </div>
              </div>
            ))}
        </div>

        {/* new shows */}
        <div className="row mt-4">
          <div className="col-12">
            {data.length > 0 && (
              <div className="title-movie mb-2">
                <h4>{data[6].title}</h4>
              </div>
            )}
          </div>

          {displayedData.length > 0 &&
            displayedData.map((movie, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                <CardMovie
                  img={movie.movies[6].poster_path}
                  text={movie.movies[6].overview}
                />
                <div className="desc-film">
                  <h6>{movie.movies[6].original_title}</h6>
                </div>
              </div>
            ))}
        </div>

        {/* Get A Show Adrenalin */}
        <div className="row mt-4">
          <div className="col-12">
            {data.length > 0 && (
              <div className="title-movie mb-2">
                <h4>{data[7].title}</h4>
              </div>
            )}
          </div>

          {displayedData.length > 0 &&
            displayedData.map((movie, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                <CardMovie
                  img={movie.movies[7].poster_path}
                  text={movie.movies[7].overview}
                />
                <div className="desc-film">
                  <h6>{movie.movies[7].original_title}</h6>
                </div>
              </div>
            ))}
        </div>

        {/* sci-fi tv */}
        <div className="row mt-4">
          <div className="col-12">
            {data.length > 0 && (
              <div className="title-movie mb-2">
                <h4>{data[8].title}</h4>
              </div>
            )}
          </div>

          {displayedData.length > 0 &&
            displayedData.map((movie, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 my-2">
                <CardMovie
                  img={movie.movies[8].poster_path}
                  text={movie.movies[8].overview}
                />
                <div className="desc-film">
                  <h6>{movie.movies[8].original_title}</h6>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Shows;
