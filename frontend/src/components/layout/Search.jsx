import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword?.trim()) {
      navigate(`/?keyword=${keyword}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <>
      <div className="ForDesktop">
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              aria-describedby="search_btn"
              className="form-control"
              placeholder="Enter Product Name ..."
              name="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button id="search_btn" className="btn" type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>

      <div className="ForMobile">
        {" "}
        <form onSubmit={submitHandler}>
          <div className="input-group ">
            <input
              type="text"
              id="search_field"
              aria-describedby="search_btn"
              className="form-control "
              placeholder="Enter Product Name ..."
              name="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button id="search_btn" className="btn" type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
