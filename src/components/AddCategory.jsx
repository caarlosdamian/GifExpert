import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setcategorias }) => {
  const [inputValue, setinputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setcategorias((categorias) => [ inputValue,...categorias]);
    setinputValue("");
  };
  const onChange = (e) => {
    setinputValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={inputValue} onChange={onChange} />
    </form>
  );
};

AddCategory.prototypes = {
  setcategorias: PropTypes.func.isRequired,
};
