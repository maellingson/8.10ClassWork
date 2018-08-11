import React from "react";

const List = props => (
  <ul className="list-group">
    Using the map method, render one li element displaying the text property of
    each grocery object.

    {
      props.groceries.map(
        (grocery) => (
          <li>
            <p>{grocery.id}</p>
            <p>{grocery.name}</p>
            <p>{grocery.purchased? "Yes" : "No"}</p>

            </li>
        )

      )
    }
  </ul>
);

export default List;
