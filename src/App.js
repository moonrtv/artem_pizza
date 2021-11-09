import React, {useState, useContext} from 'react';
import {PizzaConstructor} from './PizzaConstructor';
import {PizzaOrder} from './PizzaOrder';
import {PizzaContext} from './PizzaContext';

const App = () => {
  const {pizza, updateRadioParametersForPizza, updateCheckedParametersFromPizza} = useContext(PizzaContext);
  const [isSubmit, setIsSubmit] = useState(true);

  const handleSubmit = () => {
    setIsSubmit(false);
  };

  return (
    <>
      {isSubmit && (
        <PizzaConstructor
          updateRadio={updateRadioParametersForPizza}
          updateChecked={updateCheckedParametersFromPizza}
          handleSubmitOrder={handleSubmit}
          state={pizza}
        />
      )}
      {!isSubmit && <PizzaOrder state={pizza} />}
    </>
  );
};

export default App;
