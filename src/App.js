import './App.css';
import React, { useState } from 'react';
import image1 from "./bg-card-front.png"
import image2 from "./bg-card-back.png"
import logo from "./icon-complete.svg"

function App() {
  let [details, setDetails] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvv: ""
  });
  let [errorMessage, setErrorMessage] = useState("");
  function handleInput(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }
  function checkName() {
    console.log(details.name)
    if (details.name === "") {
      setErrorMessage("Name Can't be blank");
      console.log(errorMessage);
      let error = document.getElementsByClassName("error-name")[0];
      error.style.visibility = "visible";
      let input = document.getElementById('name');
      input.style.borderColor = "red";
      return false;
    } else {
      let error = document.getElementsByClassName("error-name")[0];
      error.style.visibility = "hidden";
      let input = document.getElementById('name');
      input.style.borderColor = "black";
      return true;
    }
  }
  function checkNumber(){
    let regEx = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/
    if(!details.number.match(regEx)){
      setErrorMessage("Wrong Format");
      console.log(errorMessage);
      let error = document.getElementsByClassName("error-number")[0];
      error.style.visibility = "visible";
      let input = document.getElementById('number');
      input.style.borderColor = "red";
      return false;
    } else {
      let error = document.getElementsByClassName("error-number")[0];
      error.style.visibility = "hidden";
      let input = document.getElementById('number');
      input.style.borderColor = "black";
      return true;
    }
    
  }
  function checkDate(){
    if(details.month==="" || details.year===""){
      setErrorMessage("Date Can't be blank");
      console.log(errorMessage);
      let error = document.getElementsByClassName("error-date")[0];
      error.style.visibility = "visible";
      let input1 = document.getElementById('date-mm');
      let input2 = document.getElementById('date-yy');
      input1.style.borderColor = "red";
      input2.style.borderColor = "red";
      return false;
    }else if(details.month.length>2 || details.year.length>2){
      setErrorMessage("Invalid Date");
      console.log(errorMessage);
      let error = document.getElementsByClassName("error-date")[0];
      error.style.visibility = "visible";
      let input1 = document.getElementById('date-mm');
      let input2 = document.getElementById('date-yy');
      input1.style.borderColor = "red";
      input2.style.borderColor = "red";
      return false;  
    }else{
      let error = document.getElementsByClassName("error-date")[0];
      error.style.visibility = "hidden";
      let input1 = document.getElementById('date-mm');
      let input2 = document.getElementById('date-yy');
      input1.style.borderColor = "black";
      input2.style.borderColor = "black";
      return true;
    }
  }
  function checkCvv(){
    if (details.cvv === "") {
      setErrorMessage("Cvv Can't be blank");
      console.log(errorMessage);
      let error = document.getElementsByClassName("error-cvv")[0];
      error.style.visibility = "visible";
      let input = document.getElementById('cvc');
      input.style.borderColor = "red";
      return false;
    }else if(details.cvv.length!==3){
      setErrorMessage("Invalid Cvv");
      console.log(errorMessage);
      let error = document.getElementsByClassName("error-cvv")[0];
      error.style.visibility = "visible";
      let input = document.getElementById('cvc');
      input.style.borderColor = "red";
      return false;
    }else {
      let error = document.getElementsByClassName("error-cvv")[0];
      error.style.visibility = "hidden";
      let input = document.getElementById('cvc');
      input.style.borderColor = "black";
      return true;
    }
  }
  function confirm() {
    if (checkName() && checkNumber() && checkDate() && checkCvv()) {
      let divcard = document.getElementsByClassName("card-forms")[0];
      let divsubmit = document.getElementsByClassName("card-submit")[0];
      let carddetails = document.getElementsByClassName("card-details");
      divcard.style.display = "none";
      divsubmit.style.display = "block";
      for (let ele of carddetails) {
        ele.style.display = "inline-block";
      }
    }
  }
  function continuee() {
    window.location.reload()
  }
  return (
    <div className="App">
      <div className="side-nav"></div>
      <div className="card-front">
        <img src={image1} alt="card front" />
        <span className='card-details card-name'>{details.name}</span>
        <span className='card-details card-number'>{details.number}</span>
        <span className='card-details card-date'>{details.month}/{details.year}</span>
      </div>
      <div className="card-back">
        <img src={image2} alt="card back" />
        <span className='card-details card-cvv'>{details.cvv}</span>
      </div>
      <div className="card-forms">
        <form onSubmit={e => (e.preventDefault())}>
          <div className="form-info">
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input id="name" name="name" type="text" placeholder="eg. Shalini Anand" onChange={e => handleInput(e)} />
            <div className='error-name'>{errorMessage}</div>
          </div>
          <div className="form-info">
            <label htmlFor="number">CARD NUMBER</label>
            <input id="number" name="number" type="text" placeholder="eg. 0000 0000 0000 0000" onChange={e => handleInput(e)}/>
            <div className='error-number'>{errorMessage}</div>
          </div>
          <div  className="form-info inline">
            <label htmlFor="date-mm date-yy">EXP DATE [MM/YY]</label>
            <input id="date-mm" name="month" className="less-w" type="text" placeholder="MM" onChange={e => handleInput(e)} />
            <input id="date-yy" name="year" className="less-w" type="text" placeholder="YY" onChange={e => handleInput(e)} />
            <div className='error-date'>{errorMessage}</div>
          </div>
          <div  className="form-info inline">
            <label htmlFor="cvc">CVC</label>
            <input id="cvc" name="cvv" className="less-c" type="number" maxLength="3" placeholder="CVC" onChange={e => handleInput(e)}  />
            <div className='error-cvv'>{errorMessage}</div>
          </div>
          <button type="submit" onClick={confirm}><b>Confirm</b></button>
        </form>
      </div>
      <div className="card-submit">
        <div className="logo">
          <img src={logo} alt="complete-logo" />
        </div>
        <div className="thanks">THANK YOU !</div>
        <div className="para">Your card details are added sucessfully</div>
        <button className='button-two' onClick={continuee}><b>Continue</b></button>
      </div>
    </div>
  );
}

export default App;
