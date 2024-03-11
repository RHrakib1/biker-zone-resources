import './App.css'
import Counter from './counter';

function App() {
  function handleClick() {
    // "alert" use krle btn a click krle notification dekhabe 
    alert('button click');

  }
  // arrow function on btn click 2
  const handleClick2 = () => {
    alert('on click the btn')
  }

  // johon kono parameater nibo tokhn 
  const addFive = (numberAdd) => {
    alert(numberAdd + 10)

  }
  return (
    <>
      <h1>React core </h1>
      <Counter></Counter>
      {/* <button onClick="handleClick">click me</button>::: aita js a koraq hoito kintu btn  a on click add krte niche deoya example er moto krte hbe  */}
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>Click 2</button>
      {/* sorasori function bosanor por  */}
      <button onClick={() => { alert('on click the btn') }}>Click </button>


      <button onClick={() => addFive(5)}>click hear</button>
    </>
  )
}

export default App
