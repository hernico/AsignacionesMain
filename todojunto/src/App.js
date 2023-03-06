import './App.css';
import Personas from './Components/personas/personas';


function App() {
  return (
    <div className="App">
      
  <div className="item1">Header</div>
  <div className="item2">
    </div>
  <div className="item3">Main
  <Personas firstName= {'Jane'} lastName={'Doe'} age={45} hairColor={'black'}  />
      <br />
      <Personas firstName= {'John'} lastName={'Smith'} age={88} hairColor={'bBrownlack'} />
      <Personas firstName= {'Millard'} lastName={'Fillmore'} age={50} hairColor={'Brown'} />
      <Personas firstName= {'Maria'} lastName={'Smith'} age={62} hairColor={'Brown'} />
      </div>  
    
  <div className="item4">Right</div>
  <div className="item5">Footer</div>
</div>
  );
}

export default App;
