import React from 'react';

class MusicItem extends React.Component {
  constructor(props){
    super(props);
  }

render(){
   if(!this.props.musicItem){
     return null;
   }

   // console.log(this.props);

   return (
     <div className="allSongs">
      <h3>{this.props.musicItem["im:artist"].label}</h3>
      <h4>{this.props.musicItem["im:name"].label}</h4>
      <img src={this.props.musicItem["im:image"][2].label} alt={this.props.musicItem["im:artist"].label}/>
     </div>
   );
 }
}

export default MusicItem;
