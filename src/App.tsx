import './App.css'
import ReduxBasic from "./assets/ReduxBasic/ReduxBasic.tsx";
import Counter from "./components/Counter/Counter.tsx";
import {useSelector} from "react-redux";



const App = () => {


  return (
    <div className="app">
      <Counter/>
    </div>
  )
};

export default App
