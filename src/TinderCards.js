import React, { useState, useEffect } from "react";
import TinderCards from "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";
import axios from "./axios";

function Tindercards() {
  const [people, setPeople] = useState([
    {
      name:"Messi",
      imgUrl:"https://www.fcbarcelona.com/photo-resources/2019/09/26/43931b52-6dcb-4f1e-8fba-81e5b688f11a/10_MESSI_JUGADORS-WEB.jpg?width=1200&height=750"
    },
    {
      name:"Ronaldo",
      imgUrl:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/01/12/19/ronaldo.jpg"
    },
  ]);



  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "Left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Tindercards;
