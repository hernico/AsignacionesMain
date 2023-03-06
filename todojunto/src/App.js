import './App.css';
import Personas from './Components/personas/personas';


function App() {
  return (
    <div className="App">
      
  <div className="item1">Header</div>
  <div className="item2">
  <Personas firstName= {'Jane'} lastName={'Doe'} age={45} hairColor={'black'}  />
      <br />
      <Personas firstName= {'Jane'} lastName={'Doe'} age={88} hairColor={'black'} />

    
    </div>
  <div className="item3">Main</div>  
  <div className="item4">Right</div>
  <div className="item5">Footer</div>
</div>
  );
}

export default App;
