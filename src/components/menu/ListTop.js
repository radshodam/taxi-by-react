import React from "react";

const ListTop = ({ href, name }) => {
  return (
    <>
      <li>
        <a href={href}>{name}</a>
      </li>
    </>
  );
};

export default ListTop;
