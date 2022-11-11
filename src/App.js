import React ,{Component} from 'react'
import './App.css';
import BulbOnOff from './component/BulbOnOff';
import Count from './component/Count'
class App extends Component {

  render(){
  return (
  
  //  <div className="App">
     <>
      {/* <ChildComponent />
      <GrandChildComponent/> */}
       <Count/>
       <BulbOnOff/>
      </>
    // </div>
    
  );
  
}
}
export default App;
