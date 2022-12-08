/* esLint-disable */
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  
  let[name,change]=useState(['React practice.','Java practice.','Spring practice.']);
  let[like, likechange ] =useState(0);

  function changeName(){
    var newArray = [...name];
    newArray[0]='Practice React';
    change(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
      <div style={{fontSize:'50px'}}>DJ's Blog</div>
      </div>
      <button onClick={changeName}>button</button>
      <div className="list">
        <h4>{name[0]}  <span onClick={()=>{likechange(like+1)}}>🔥</span> {like} </h4>
        <p>12/8</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{name[1]}</h4>
        <p>12/8</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{name[2]}</h4>
        <p>12/8</p>
        <hr/>
      </div>
      
    </div>
  );
}

export default App;
