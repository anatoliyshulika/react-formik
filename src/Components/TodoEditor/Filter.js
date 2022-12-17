import React from "react";

const Filter = ({ filter, onChange }) => (
  <label>
    Фильтр по имени
    <input type="text" value={filter} onChange={onChange}></input>
  </label>
);

export default Filter;
