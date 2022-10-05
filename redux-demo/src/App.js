import './App.css';
import { useSelector,useDispatch } from "react-redux";
import { increseNum,decreseNum } from "./actions";

function App() {

  const dispatch = useDispatch();
  const val = useSelector((state) => state.upDown);
  return (
    <div className="App">

      <h1>Value = {val}</h1>
      <input type="button" value="-" onClick={() => {dispatch(decreseNum())}} />
      <input type="button" value="+" onClick={() => {dispatch(increseNum())}} />
      
    </div>
  );
}

export default App;
