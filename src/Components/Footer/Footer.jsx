import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer py-5" style={{ borderTop:'1px solid white' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ color: "whitesmoke", fontWeight: "700" }}>WFLIX</h2>
            <p style={{fontSize:'14px'}} className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              recusandae, dolorem natus tenetur officia pariatur, exercitationem
              ea illo, repellat ullam possimus? Rem quae et tenetur vel officia
              similique totam possimus?
            </p>
          </div>
          <div className="col-md-3 offset-md-1 text-white my-2">
            <h6>Category</h6>
            <a style={{display:"block", textDecoration:'none', color:'white'}} href="/" className="mt-4">Trending Movies</a>
            <a style={{display:"block", textDecoration:'none', color:'white'}} href="/" className="mt-2">New Movies</a>
            <a style={{display:"block", textDecoration:'none', color:'white'}} href="/" className="mt-2">Best Animation</a>
            <a style={{display:"block", textDecoration:'none', color:'white'}} href="/" className="mt-2">Family Time</a>
            <a style={{display:"block", textDecoration:'none', color:'white'}} href="/" className="mt-2">Trending Shows</a>
            <a style={{display:"block", textDecoration:'none', color:'white'}} href="/" className="mt-2">New Shows</a>
          </div>
          <div className="col-md-2 text-white my-2">
            <h6>Category</h6>
            <a style={{display:"block", textDecoration:'none', color:'white'}} className="mt-4">More Feature</a>
            <a style={{display:"block", textDecoration:'none', color:'white'}} href="/" className="mt-2">Beranda</a>
            <a style={{display:"block", textDecoration:'none', color:'white'}} href="/search" className="mt-2">Search Movies</a>
            <a style={{display:"block", textDecoration:'none', color:'white'}} href="www.linkedin.com/in/ngakanalit" className="mt-2">About Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
