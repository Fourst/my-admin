import React, { Component} from 'react';

class Search extends Component {

  render(){
    return(
    <div>
        <input type="text" placeholder="Search" style={{borderRadius:"3px",border:"none",padding:"5px",height:"20px"}}/>
    </div>
    );
  }
}

export default Search;
