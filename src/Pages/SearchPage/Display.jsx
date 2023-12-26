import "./style.css";
import Form from "react-bootstrap/Form";
import SearchIcon from "../../Assets/img/searchIcon.svg";
import { NavigationBar } from "../../Components/Navbar/NavigationBar";
import axios from "axios";
import { useState } from "react";
import CardMovie from "../../Components/Card-Movie/CardMovie";

const Display = () => {
  const [fetchData, setFetchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showHasil, setShowHasil] = useState(false);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    console.log("Nilai pencarian:", searchValue);
    fetchDataSearch();
    setSearchValue("");
    event.preventDefault();
  };

  const fetchDataSearch = async () => {
    const options = {
      method: "GET",
      url: "https://movies-api14.p.rapidapi.com/search",
      params: {
        query: `${searchValue}`,
      },
      headers: {
        "X-RapidAPI-Key": "5b56e76766msh7d6c5d00f3a1dcap14031fjsn4bdd19800a0a",
        "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setFetchData(response.data);
      setShowHasil(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavigationBar />
      <div
        className="container"
        style={{
          marginTop: "140px",
        }}
      >
        <div className="row">
          <div className="col-12">
            <h2
              className="text-white"
              style={{
                fontWeight: "700",
              }}
            >
              Cari Film Favorite Mu
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              voluptatum quasi consequatur quas, illo, magni quis, quae
              molestias praesentium delectus laudantium doloremque unde! Numquam
              autem facilis, in aut optio esse?
            </p>
            <Form className="search-nav mt-3" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="text"
                placeholder="Cari Film"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <button className="btn btn-light" type="submit">
                <img width={"20px"} src={SearchIcon} alt="" />
              </button>
            </Form>
          </div>
          <div
            className="col-12 mt-4"
            style={{ display: showHasil ? "block" : "none" }}
          >
            <h4
              className="text-white"
              style={{
                fontWeight: "700",
              }}
            >
              Hasil Penelusanran Film : {fetchData.query}
            </h4>
          </div>
        </div>
        <div className="row mt-3">
          {fetchData.contents &&
            fetchData.contents.map((movie) => (
              <div className="col-6 col-md-4 col-lg-2 mb-4" key={movie._id}>
                <a href={movie.youtube_trailer} target="_blank">
                  <CardMovie
                    text={movie.overview}
                    rilis={movie.release_date}
                    img={movie.poster_path}
                  />
                </a>
                <div className="text-center py-1">
                  <span style={{
                    fontSize:'14px'
                  }} className="text-white">{movie.title}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Display;
