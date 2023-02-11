import  {useState , useReducer} from 'react'



const initialState = {
    value : "",
    isTouched : false
};

const userInputReducer = (state , action)=>{
    if(action.type === 'INPUT'){
        return {value : action.value,  isTouched: state.isTouched}
    };
    if(action.type === 'BLUR'){
        return{ isTouched : true , value : state.value}
    };
    if(action.type === 'RESET'){
        return { value : '' , isTouched : false}
    };
    return{
        isTouched : false ,
        value : "",
    };
}
const useHook = (validity) => {

    // const [enteredValue , setEnteredValue] = useState("");
    // const [isTouched , setIsTouched] = useState(false);
    // const valueIsValid = validity(enteredValue);
    // const hasError = !valueIsValid && isTouched;

    const [stateValue , dispatch] = useReducer(userInputReducer , initialState);


    const valueIsValid = validity(stateValue.value);
    const hasError = !valueIsValid && stateValue.isTouched;

    const inputChangeHandler = (event)=>{
        dispatch({type : 'INPUT' , value : event.target.value})
        // setEnteredValue(event.target.value)
      };

    const inputBlureHandler = (event)=>{
        dispatch({type : 'BLUR'})
        // setIsTouched(true)
      };

      const reset = ()=>{
        dispatch({type : "RESET"})
        // setEnteredValue('')
        // setIsTouched(false)
      }

  

  return {
    // enteredValue,
    enteredValue : stateValue.value ,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlureHandler,
    reset,
  };
};

export default useHook