import './App.css'
import React, { useState } from 'react';
// import dollar from "./images/dollar.png"
// import cny from './images/coin.png'


const Item = () => {

  const [Items, setItems] = useState([])
  const [pause, setPause] = useState(0)
  const state = pause < 3
  function handleClick(e) {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      const result = Math.floor(Math.random() * (max - min + 1)) + min;
      return result % 2
    }
    if (pause < 3) {
      setItems(Items => [...Items, getRandomInt(1, 100)])
      setPause(pause + 1)
    }
    e.currentTarget.classList.toggle('is-flipped');


  };

  return (
    <div className="col col-12">


      {pause}/3
      <progress max="3" value={pause} class="progress-bar">
      </progress>
      <br />
      <div className="d-grid gap-1 d-sm-block">
        <button onClick={handleClick} className="btn btn-primary " disabled={!state} >dianji{Items[0]}</button>
      </div>
      <div class="container">
        <div class="row row-cols-3 mt-3">


        </div>
      </div>
      <br />
      {Items}



    </div>


  )
}


const Group = () => {

  // const [Groups, setGroups] = useState([])
  return (
    <div className="row row-cols-3  text-center ">

      <Item />

    </div>
  )
}

function App() {



  return (
    <div className="container ">
      <div className="fs-1">hello</div>

      <Group />


    </div>
  );
}

export default App;
