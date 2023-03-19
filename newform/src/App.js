import './App.css';
import Hola from './components/Counter/counter';
import Form from './components/form';

function App() {
  return (
    <div className="App">
     
<Hola/>


  <Form firstName= {'Jane'} lastName={'Doe'} age={45} hairColor={'black'}  />




    </div>
  );
}

export default App;
