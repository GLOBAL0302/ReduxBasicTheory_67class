import "./Counter.css";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Redux/store.ts";
import {
    decrease,
    decreaseBy, fetchCounterThunk,
    increaseBy, increaseCounterThunk
} from "../../Redux/ReduxSlices/counterSlice.ts";
import {useEffect} from "react";

const Counter = () => {
    const counterValue = useSelector<RootState>(state => state.counter.value);
    const isLoading = useSelector<RootState>(state => state.counter.isLoading)
    const dispatch:AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCounterThunk())
    }, [dispatch]);

    const increment = async ()=>{
        await  dispatch(increaseCounterThunk());
        await  dispatch(fetchCounterThunk())
    }


    return (
        <div className="Counter">
            <h1>{isLoading? "Loading..." : counterValue }</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={()=>dispatch(decrease())}>Decrease</button>
            <button onClick={()=>dispatch(increaseBy(5))}>Increase by 5</button>
            <button onClick={()=>dispatch(decreaseBy(5))}>Decrease by 5</button>
        </div>
    );
};

export default Counter;