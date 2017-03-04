import React, { Component } from 'react';

import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        
        <form onSubmit={()=>{}}>
          <label>
            Name:
            <input type="text" value={""} onChange={()=>{}} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Dashboard;