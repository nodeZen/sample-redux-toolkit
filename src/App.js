import React from "react";
import CounterValue from './components/counter-value/counter-value'
import CounterButtons from './components/button-component/counter-buttons';
const App = ()=>{
   return <div className="container">
      <CounterValue/>
      <CounterButtons/>
   </div>
}


export default App;
