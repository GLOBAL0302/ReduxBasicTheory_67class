import "./Counter.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store.ts";
import {decrease, decreaseBy, increase, increaseBy} from "../../Redux/ReduxSlices/counterSlice.ts";
const Counter = () => {
    const counterValue = useSelector<RootState>(state => state.counter.value);
    const dispatch = useDispatch();


    return (
        <div className="Counter">
            <h1>{counterValue}</h1>
            <button onClick={()=>dispatch(increase())}>Increase</button>
            <button onClick={()=>dispatch(decrease())}>Decrease</button>
            <button onClick={()=>dispatch(increaseBy(5))}>Increase by 5</button>
            <button onClick={()=>dispatch(decreaseBy(5))}>Decrease by 5</button>
        </div>
    );
};

export default Counter;