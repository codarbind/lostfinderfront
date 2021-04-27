import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	
	signContainer: {
    minWidth: 275,
    border: `10px solid black`,
    background: 'linear-gradient( yellow )',
    minHeight:'50vh',
    marginTop:'50px',
    width:`50%`,
    margin:` auto`,
    marginBottom:'50px',
    overflow:'hidden',
  },
  signInput:{
  	width:` 100%`,
  padding: `12px 20px`,
  margin: `8px 0`,
  display: `inline-block`,
  border: `1px solid #ccc`,
  boxSizing: `border-box`,
  },
  signButton: {
  backgroundColor: `black`,
  color: `yellow`,
  padding: `14px 20px`,
  margin: `8px 0`,
  border: `none`,
  cursor: `pointer`,
  width: `100%`,
}

}));

let messages ={
  0:"",
  1:"contact made successfully",
  2:"that did not go fine, kindly retry",
  3:"kindly try again, we did not get that",
  }

  let messagesColor ={
    1:'green',
    2:'red',
    3:'red',
   
  }

let messageNumber = 0;



const Contact = () =>{

	 const classes = useStyles();
   const [validEmail, setValidEmail] = React.useState(true);
   const [isLoaded, setIsLoaded] = React.useState(false);
   const [items,setItems] = React.useState([]);





//call backend api
 function contactForm(e){ 

    e.preventDefault();
  document.getElementById('0').innerHTML = 'working on it....';
  document.getElementById('0').style.color = 'blue';
    var urlencoded;
    urlencoded = new URLSearchParams();
    //get input values
    for (var i = 5; i > 0; i--) {
      let name = document.getElementById(i).name; 
      let value = document.getElementById(i).value;
      if(i != 3){
        let firstCharUppercase = value.charAt(0).toUpperCase()
        value = value.toLowerCase();
        value = value.replace(value.charAt(0),firstCharUppercase)
         urlencoded.append(name,value);
      }else{
        value = value.toLowerCase();
        urlencoded.append(name,value);
      }
      //urlencoded.append(name,value);
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch(`${process.env.REACT_APP_backEndAPI_URL}/contact`, requestOptions)
  .then(response => response.json())
  .then(result => {
  document.getElementById('0').innerHTML    =  messages[`${result['id']}`];
  document.getElementById('0').style.color  =  messagesColor[`${result['id']}`];
  })
  .catch(error =>{ return error }); 
      }

	return(
		<div className={classes.body}>
		
		<CssBaseline />
		<Typography/>
      
        
        <div className={classes.signContainer}>
        <form >
		<h2>Contact Us</h2>
    <h3 id='0'></h3>
		 <div >
     <label for="firstName"><b>First Name</b></label>
    <input type="text" placeholder="your first name here" id='1' name="firstName" required className={classes.signInput} />
    <label for="LastName"><b>Last Name</b></label>
    <input type="text" placeholder="your last name here" id='2' name="lastName" required className={classes.signInput} />
    <label for="userEmail"><b>Email Address</b></label>
    <input type="email" placeholder="your email address" id='3' name="userEmail" required className={classes.signInput} />
    <label for="subject"><b>Subject</b></label>
    <input type="text" placeholder="subject of the message" id='4' name="subject" required className={classes.signInput} />
    <label for="longDescription"><b>Your Message</b></label>
    <textarea id='5' name='message' placeholder='...your message here ' className={classes.signInput} required></textarea>

    <button type="submit" id='4' className={classes.signButton} onClick={contactForm}>Contact Us</button>
    
  </div>
  	</form>
        </div>

      
		
		</div>

		)
}

export default Contact