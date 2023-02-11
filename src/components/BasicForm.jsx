import React from 'react'
import useHook from '../hooks/Form-hook';


const BasicForm = (props) => {

  const isNotEmpty = value => value.trim() !== ""
  const isEmail = value => value.includes('@')
  const {
    enteredValue : enteredFirstName ,
    valueIsValid : enteredFirstNameIsValid , 
    hasError : fNameInputFieldHasError ,
    inputChangeHandler : firstNameChangeHandler,
    inputBlureHandler : firstNameBlureHandler , 
    reset : resetFirstName 

  } = useHook(isNotEmpty)

  const {
    enteredValue : enteredLastName ,
    valueIsValid : enteredLastNameIsValid , 
    hasError : lNameInputFieldHasError ,
    inputChangeHandler : lastNameChangeHandler,
    inputBlureHandler : lastNameBlureHandler , 
    reset : resetLastName 

  } = useHook(isNotEmpty)


  
  const {
    enteredValue : enteredEmail ,
    valueIsValid : enteredEmailIsValid , 
    hasError : emailFieldHasError ,
    inputChangeHandler : emailChangeHandler,
    inputBlureHandler : emailBlureHandler , 
    reset : resetEmail 

  } = useHook(isEmail)

  let formIsValid = false;
  if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid ){
    formIsValid = true;
  }

  const formSubmitHandler = (event)=>{
    event.preventDefault();
   if(!formIsValid){
    return
   }

    resetFirstName()
    // reseting LastName
    resetLastName()
    // reseting email 
    resetEmail()

  }


  const fInputClasses = fNameInputFieldHasError  ? 'form-control invalid' 
  : 'form-control' ;
  const lInputClasses = lNameInputFieldHasError ? 'form-control invalid' 
  : 'form-control';
  const eInputClasses = emailFieldHasError ? 'form-control invalid' 
  : 'form-control';

    return (
      <form onSubmit={formSubmitHandler}>
        <div className='control-group'>

          <div className={fInputClasses}>
            <label htmlFor='name'>First Name</label>
            <input 
            type='text' 
            id='name' 
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlureHandler}
            />
            { fNameInputFieldHasError && (<p className='error-text'>Field can't be empty!</p>)}
          </div>

          <div className={lInputClasses}>
            <label htmlFor='name'>Last Name</label>
            <input 
            type='text' 
            id='name'
            value={enteredLastName}
            onChange={lastNameChangeHandler} 
            onBlur={lastNameBlureHandler}
            />
            {lNameInputFieldHasError && <p className='error-text'>Field can't be empty</p>}
          </div>
        </div>

        <div className={eInputClasses}>
          <label htmlFor='name'>E-Mail Address</label>
          <input 
          type='text' 
          id='name' 
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlureHandler}
          />
          {emailFieldHasError&& <p className='error-text'>Please enter a valid email!</p>}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;
  