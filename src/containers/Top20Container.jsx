import React from 'react';
import MusicList from '../components/MusicList';
import Header from '../components/Header'; 
import SeeMore from '../components/SeeMore';

class Top20Container extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener('load', () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({
          songs: data.feed.entry
        });
      }
    });
    request.send();
  }

  render(){
    return (
      <div className="Top20-box">
        <Header title="iTunes UK Top 20 songs" />
        <MusicList data={this.state.songs} chartPosition={this.state.chartPosition}/>
        <SeeMore text="See more at iTunes"/>
      </div>
    );
  }
}

export default Top20Container;
