import React from 'react';
import './App.css';
import Card from './components/Card.js';
import data from './atlas-of-remote-islands.js';

function App() {
  
  let island1 = data.islands[0]
  let island2 = data.islands[1]
  let island3 = data.islands[2]
  let island4 = data.islands[3]
  console.log(data.islands[2])

  return (
    <div>
      <div className="container">
        <h1 className="section-title">Atlas of Remote Islands</h1>
      </div>
      
      <div className="container">
        <h2 className="section-title">Islands</h2>
        <ul className="cards">
{/*           
          <Card name = {island1.name} image = {island1.image} description = {island1.description} coords ={island1.coords}/>
          <Card name = {island2.name} image = {island2.image} description = {island2.description} coords ={island2.coords}/>
          <Card name = {island3.name} image = {island3.image} description = {island3.description} coords ={island3.coords}/>
          <Card name = {island4.name} image = {island4.image} description = {island4.description} coords ={island4.coords}/>
           */}

           {data.islands.map(island =>{
               return (<Card island = {island} />)
           })}

           </ul>
      </div>
    </div>
  );
}

export default App;
