import logo from './logo.svg';
import './App.css';
import States from './States';
import Form from './Form';


function App() {


return (
  <div className="App">
    <States name={"irene"} school={"blooming buds bethania"} />
    <States name={"avlin"} />  <States name={"tree"} />  <States name={"leo"} />
    <div>
      <Form />
    </div>

  </div>
);
}

export default App;
