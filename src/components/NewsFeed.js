import React from "react";
import { v4 as uuidv4 } from "uuid";
import AddFeed from "./AddFeed";
import DisplayFeed from "./DisplayFeed";
class NewsFeed extends React.Component {
  time = new Date().toLocaleDateString();

  constructor() {
    super();
    //intial state
    this.state = {
      newsFeeds: [
        {
          id: uuidv4(),
          description:
            "Mumbai Rains LIVE: Several low-lying areas inundated as Monsoon brings heavy showers; local train services hit",
          likes: 0,
          date: this.time,
        },
        {
          id: uuidv4(),
          description:
            "Woman with HIV carries Covid-19 infection for 216 days, develops 32 virus mutations inside her body",
          likes: 0,
          date: this.time,
        },
        {
          id: uuidv4(),
          description: "Support ayurvedic medicine...",
          likes: 0,
          date: this.time,
        },
      ],
    };
  }

  //function for adding New feed
  addFeed = (newFeed) => {
    const tempFeed = {
      id: uuidv4(),
      description: newFeed,
      likes: 0,
      date: this.time,
    };
    this.setState({
      newsFeeds: [tempFeed, ...[...this.state.newsFeeds]],
    });
  };

  //function for deleting feed
  deleteFeed = (index) => {
    const newsFeeds = [...this.state.newsFeeds];
    newsFeeds.splice(index, 1);
    this.setState({ newsFeeds: newsFeeds });
  };

  //function for saving edited feed
  saveEditedFeed = (index, editedFeed) => {
    const newsFeeds = [...this.state.newsFeeds];
    newsFeeds[index].description = editedFeed;
    this.setState({ newsFeeds: newsFeeds });
  };

  //function for likes increment
  likesIncrement = (index) => {
    const newsFeeds = [...this.state.newsFeeds];
    newsFeeds[index].likes = newsFeeds[index].likes + 1;
    this.setState({
      newsFeeds: newsFeeds,
    });
  };

  //includes mainly two components , addFeed and displayFeed
  render() {
    return (
      <div>
        <AddFeed newsFeeds={this.state.newsFeeds} addFeed={this.addFeed} />
        <br />
        <DisplayFeed
          newsFeeds={this.state.newsFeeds}
          deleteFeed={this.deleteFeed}
          likesIncrement={this.likesIncrement}
          saveEditedFeed={this.saveEditedFeed}
        />
      </div>
    );
  }
}

export default NewsFeed;
