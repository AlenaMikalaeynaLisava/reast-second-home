import React from "react";

function Request(props) {
  const { categories, query } = props;
  return (
    <li>
      <span>Category: {categories} Query: {query}</span>
    </li>
  );
}

export default Request;
