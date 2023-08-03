import React from "react";
import "./SearchForm.css";
import Button from "../../GeneralPagesComponent/Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchInput from "../SearchInput/SearchInput";
import Search from "../../../images/search.svg";
import { IconSearch } from "../IconSearch/IconSearch";

const SearchForm = () => {
  const searchButton = (
    <Button type={"search"} to="/signup" className="search__button">
      <div className={"search__icon"}>
        <IconSearch />
      </div>
    </Button>
  );

  return (
    <section className={"search"}>
      <div className={"search__form"}>
        <SearchInput searchButton={searchButton} />
        <FilterCheckbox />
        <hr className={"part-about__line_vertical"}></hr>
      </div>
      <hr className={"part-about__line part-about__line_footer"} />
    </section>
  );
};

export default SearchForm;
