import React, { Component } from "react";
import FriendCard from "./Components/FriendCard";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends 
  };

  

  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log("state", this.state);
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard 
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
