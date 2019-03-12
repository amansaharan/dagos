import React, { Component } from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            id={robots[i].id}
            name={robots[i].name}
            place={robots[i].place}
            bn={robots[i].bn}
            email={robots[i].email}
            phone={robots[i].phone}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
