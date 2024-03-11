import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Halal from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Halal></Halal>
      {/* nicher moto data kthao pathaile obj hisabe paoya jabe ---- access to the data obj start*/}
      <Device name='laptop' price='190k' brand="lenova"></Device>
      <Device name='mobile' price='19k' brand="walton"></Device>
      <Device name='Ac' price='100k' brand="minister"></Device>
      <Device name='hitter' price='10k' brand="sony"></Device>
      {/* end */}
      < Student gread='77' score='14'></ Student>
      < Student gread='700' score='554'></ Student>
      < Student gread={44444} score='14'></ Student>
      < Student ></ Student>
      < Person></ Person>
      <Woman></Woman>
      <Institute></Institute>

    </>
  )
}
// ki vabe obj theke data access kora jai
function Device(propos) {
  console.log(propos);
  return <h2>This Device is a {propos.name}. the price is a :{propos.price}. the brand is a {propos.brand} </h2>
}
// obj theke data access korar short cut niyom
function Student({ gread, score }) {
  console.log(gread, score);
  return (
    <div className='student'>
      <h2>this is a student</h2>
      <p>class : {gread} </p>
      <p>score : {score} </p>
    </div>
  )
}
// akhane daynamic vabe obj , add ki vabe kore seta dekhano holo

function Person() {
  const age = 22;
  const money = 100;
  const man = { name: 'shakib khan', age: 55 }
  return <h3>i am a {man.name} with age - {age + money}</h3>
}


// example css style set korar niyom
function Woman() {
  return (
    <div className='student'>
      <h2>this is a world</h2>
      <p>lorem has a perfact item in our country for react</p>
    </div>
  )

}


// anpther csss style example 
function Institute() {
  const cssStyle = {
    margin: '25px',
    padding: '20px',
    border: '2px solid burlywood',
    borderRadius: '15px'
  }
  return (
    <div style={cssStyle}>
      <h3>my clg name is a kpi</h3>
      <p>this is a diploma students study place</p>
    </div>
  )
}

export default App
