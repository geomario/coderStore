import React from "react";

const ItemListContainer = (props) => {
  return (
    <div style={{ textAlign: "center", color: "blue" }}>
      <h1>{props.greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
