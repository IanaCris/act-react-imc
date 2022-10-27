import './App.css';

import { Person } from './domain/domain';
import ImcCalculatorService from './domain/services';

function calculate() {
  const heightElem = document.querySelector('#altura');
  const weightElem = document.querySelector('#peso');

  var person = new Person(
    parseFloat(heightElem.value),
    parseFloat(weightElem.value)
  );

  console.log(person);

  const svc = new ImcCalculatorService();
  svc.calculateImc(person.asJson());
}

function App() {
  return (
    <div className="container">
      <div className="form">
            <div className="row">
                <label>Altura</label>
                <input id="altura" placeholder="digite sua altura..." />
            </div>
            <div className="row">
                <label>Peso</label>
                <input id="peso" placeholder="digite seu peso..." />
            </div>
            <div className="row">
                <button 
                    type="button"
                    id="main-action"
                    onClick={calculate}
                >
                    Calcular...
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
