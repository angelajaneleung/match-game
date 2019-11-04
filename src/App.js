import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import DogCard from "./components/DogCard";
import dog from "./doggo.json";

// sets state to 0 or empty for array of Dogs that have been clicked
class App extends Component {
  state = {
    dog,
    clickedDog: [],
    score: 0
  };

// when you click on an image, capture image clicked as a dog is  clicked
imageClick = event => {
  const currentDog = event.target.alt;
  const dogClicked =
    this.state.clickedDog.indexOf(currentDog) > -1;

// if you click on a dog that has already been selected, the game is reset and cards reordered
  if (dogClicked) {
    this.setState({
      wizard: this.state.dog.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedDog: [],
      score: 0
    });
      alert("You already clicked that Dog! You've lost. Play again?");

// if you click on a new dog, your score is increased and cards reordered
  } else {
    this.setState(
      {
        dog: this.state.dog.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedDog: this.state.clickedDog.concat(
          currentDog
        ),
        score: this.state.score + 1
      },

//if you get all 15 corrent you get a congrats message and the game resets        
      () => {
        if (this.state.score === 12) {
          alert("Congrats! You Win!");
          this.setState({
            dog: this.state.dog.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedDog: [],
            score: 0
          });
        }
      }
    );
  }
};

  render() {
    return (
      <div>
      <Navbar 
        score={this.state.score} 
      />
        <Jumbotron />
        <div className="wrapper">
          {this.state.dog.map(dog => (
            <DogCard
              imageClick={this.imageClick}
              id={dog.id}
              key={dog.id}
              image={dog.image}
            />
          )
          )
          }
        </div>
      </div>
    );
  }
}

export default App;
