import { useContext } from 'react';

import './App.css';

import ImcForm from './views/imcForm';
import ImcView from './views/imcView';
import { Person } from './domain/domain';
import ImcCalculatorService from './domain/services';

import { PersonContext } from './contexts/PersonContextProvider';

function App() {
  const { setPerson } = useContext(PersonContext);

  function calculate(height, weight) {
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
      <ImcForm onSubmit={calculate} />
      <hr />
      <ImcView />
    </div>
  );
}

export default App;
