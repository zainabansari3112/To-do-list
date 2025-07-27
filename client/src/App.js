// import React from 'react';
import './App.css';
import React, {Fragment} from 'react';
import Inputtodo from './components/inputtodo'
import Listtodo from './components/listtodo';
// import Edittodos from './components/edittodo';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <Inputtodo/>
        <Listtodo/>
        {/* <Edittodos/> */}
      </div>
      </Fragment>
  );
}

export default App;