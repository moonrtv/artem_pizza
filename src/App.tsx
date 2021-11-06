import {ConstructorPizza} from './ConstructorPizza';

import {PizzaProvider} from './PizzaContext';

const App = (): JSX.Element => {
  return (
    <div>
      <PizzaProvider>
        <ConstructorPizza />
      </PizzaProvider>
    </div>
  );
};

export default App;
