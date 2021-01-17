import React from 'react';
import "./form.css";

const FormComponent = ({ search, setQuery, setSearch}) => {

    const updateSearch = e => {
        setSearch(e.target.value);
      };
    
      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
      }
    return (
        <form className="form-containt" onSubmit={getSearch}>
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button className="btn btn-primary" type="submit">Kiválaszt</button>
        </form>
    )
}

export default FormComponent;
