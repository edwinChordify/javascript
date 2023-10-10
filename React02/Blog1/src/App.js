import logo from './logo.svg';
import './App.css';
import States from './States';


function App() {
  let data ="EDWIN ANTONY"
  function apple(){
    data="peter"
    alert(`${data}`)
  }
  return (
    <div className="App">
      <States name={"irene"}  school={"blooming buds bethania"}/>
      <States name={"avlin"} />  <States name={"tree"} />  <States name={"leo"} />
      
    </div>
  );
}

export default App;
