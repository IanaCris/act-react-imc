import { useState } from 'react';

import './App.css';

import ImcView from './views/imcView';
import { Person } from './domain/domain';
import ImcCalculatorService from './domain/services';

function App() {
  const [person, setPerson] = useState();
  const [height, setHeight] = useState(0.00);
  const [weight, setWeight] = useState(0.00);

  function calculate() {
    var person = new Person(
      parseFloat(height),
      parseFloat(weight)
    );
  
    console.log(person);
  
    const svc = new ImcCalculatorService();
    svc.calculateImc(person.asJson(), (imcPerson) => {
      setPerson(imcPerson);
    });
  }

  return (
    <div className="container">
      <div className="form">
            <div className="row">
                <label>Altura</label>
                <input id="altura" 
                  placeholder="digite sua altura..." 
                  value={height}
                  onChange={e => {
                    setHeight(e.target.value)
                  }}
                />
            </div>
            <div className="row">
                <label>Peso</label>
                <input id="peso" 
                  placeholder="digite seu peso..." 
                  value={weight}
                  onChange={e => {
                    setWeight(e.target.value)
                  }}
                />
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
        <hr />
        <ImcView person={person} />
    </div>
  );
}

export default App;
