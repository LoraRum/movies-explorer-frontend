import React from "react";
import "./SearchInput.css";
import Search from "../../../images/search.svg";
import { IconSearch } from "../IconSearch/IconSearch";

const SearchInput = ({ searchButton }) => {
  return (
    <form className={"search__film"}>
      <div className={"search__image"}>
        <IconSearch />
      </div>
      <input
        className="input input_type_search"
        id="search"
        maxLength="50"
        minLength="2"
        name="search"
        placeholder="Фильм"
        required
        type="text"
      />
      {searchButton}
    </form>
  );
};

export default SearchInput;
