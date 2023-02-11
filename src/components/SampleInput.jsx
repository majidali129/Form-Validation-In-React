import React, { useState } from 'react'
import useInput from '../hooks/Use-hooks';

const SimpleInput = () => {

  const {
    enteredValue: enteredName ,
    valueIsValid : enteredNameIsValid,
    hasError : nameInputHasError ,
    valueChangeHandler : nameChangeHandler,
    blurChangeHandler : nameBlureHandler ,
    reset : resetEnteredName,
    } = useInput(value => value.trim() !== "")


    const {
      enteredValue : enteredEmail,
      valueIsValid : enteredEmailIsValid,
      hasError : emailInputHasError,
      valueChangeHandler : emailChangeHandler,
      blurChangeHandler : emailBlureHandler,
      reset : resetEnteredEmail,
    } = useInput(value=>value.includes('@'))



  let formIsValid = false;
    if(enteredNameIsValid && enteredEmailIsValid){
      formIsValid  = true;
    }


  const formSubmitHander = (event)=>{
    event.preventDefault();

    if(!enteredNameIsValid){
      return
    }

    resetEnteredName()
    resetEnteredEmail()

  }



  const nameInputClasses = nameInputHasError ? 
  "form-control invalid" 
  : "form-control ";

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';


    return (
      <form onSubmit={formSubmitHander}>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Your Name</label>
          <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler}
          onBlur={nameBlureHandler}
          value={enteredName}
          />
          {nameInputHasError && 
          <p className="error-text">Field can't be empty!</p>
          }

        </div>

        <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlureHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>




        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;
  