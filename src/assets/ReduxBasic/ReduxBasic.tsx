
import {createStore, Action} from "redux";


interface State{
    counter:number
}

interface ActionWithPayload extends Action{
    payload?:number
}


const initialState={
    counter:0
}

const store = createStore((state:State = initialState, action:ActionWithPayload)=>{
    console.log("here in Reducer", state, action);
    if(action.type == "increase"){
        return  {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type == "add" && action.payload !== undefined){
        return  {
            ...state,
            counter: state.counter + action.payload
        }
    }

    return state;
});

// console.log("State", store.getState())

store.subscribe(()=>{
    console.log("State", store.getState())
})

store.dispatch({type:"increase"})
store.dispatch({type:"increase"})
store.dispatch({type:"increase"})
store.dispatch({type:"add",payload: 10})

console.log("State", store.getState())

const ReduxBasic = () => {
    return (
        <div>

        </div>
    );
};

export default ReduxBasic;