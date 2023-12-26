import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";

import MulanText from "../../../Assets/img/mulan.png";
import EndgameText from "../../../Assets/img/endgame.png";
import PlayIcon from "../../../Assets/img/play-icon.svg";
import InfoIcon from "../../../Assets/img/info-icon.svg";

const Hero = () => {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <div className="corosel-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <img src={MulanText} width={"240px"} alt="Mulan" />
                <p className="text-white mt-3">
                  Mulan merupakan sebuah film yang laga/pertarungan yang
                  disutradarai oleh Niki Cao dan diproduksi oleh Walt Disney
                  Pictures. Film Mulan (2020) merupakan film live-action dari
                  film animasi Mulan tahun 1998. Film ini telah ditayangkan pada
                  tanggal 4 September 2020 di Amerika Serikat dan 4 Desember
                  2020 di Indonesia. Adapun film Mulan ini dapat ditonton
                  melalui Disney+ Hotstar.
                </p>
                <a className="btn btn-danger me-2" href="https://www.youtube.com/watch?v=KK8FHdFluOQ" target="_blank">
                  <div className="d-flex align-items-center">
                    <img
                      className="me-2"
                      src={PlayIcon}
                      width={"20px"}
                      alt="play"
                    />
                    Play Vidio
                  </div>
                </a>
                <a className="btn btn-light" href="">
                  <div className="d-flex align-items-center">
                    <img
                      className="me-2"
                      src={InfoIcon}
                      width={"20px"}
                      alt="info"
                    />
                    More Info
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="corosel-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <img src={EndgameText} width={"300px"} alt="Mulan" />
                <p className="text-white mt-3">
                  In the opening, Clint Barton is teaching his daughter archery
                  on his secluded farm while his wife prepares a picnic lunch
                  for them. Suddenly, Clint's daughter vanishes and the rest of
                  Clint's family disintegrates, along with half of all life
                  across the universe, the result of Thanos' snapping his
                  fingers after acquiring all six Infinity Stones. Nebula and
                  Tony Stark are stranded in space following their defeat by
                  Thanos on Titan.
                </p>
                <a className="btn btn-danger me-2" href="https://www.youtube.com/watch?v=TcMBFSGVi1c" target="_blank">
                  <div className="d-flex align-items-center">
                    <img
                      className="me-2"
                      src={PlayIcon}
                      width={"20px"}
                      alt="play"
                    />
                    Play Vidio
                  </div>
                </a>
                <a className="btn btn-light" href="">
                  <div className="d-flex align-items-center">
                    <img
                      className="me-2"
                      src={InfoIcon}
                      width={"20px"}
                      alt="info"
                    />
                    More Info
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
