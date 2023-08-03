import "./SearchForm.css";
import Button from "../../GeneralPagesComponent/Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <section className={"search"}>
      <div className={"search__form"}>
        <form className={"search__film"}>
          <input
            className="input input_type_search"
            id="search"
            maxLength="50"
            minLength="2"
            name="search"
            placeholder="Фильм"
            required
            type="text"
          ></input>
        </form>
        <Button type={"search"} to="/signup"></Button>
      </div>

      <FilterCheckbox></FilterCheckbox>
      <hr className={"part-about__line part-about__line_footer"}></hr>
    </section>
  );
};

export default SearchForm;
