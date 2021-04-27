import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:'70%',
    margin:'auto',
    textAlign:'left',
    backgroundColor:'black',
    color:'yellow',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card:{minWidth: 275,
          maxWidth:'70%',
          margin:'auto',
          textAlign:'left',
          backgroundColor:'black',
          color:'yellow',
          marginBottom:'10px',}
});


export default function Terms(props) {
  const classes = useStyles();
  const [isLoaded,setIsLoaded] = React.useState(false);
  const [idClicked, setIdClicked] = React.useState('null');
  

  let heading = (<Card className={classes.card}>
      <CardContent >
        <Typography  color="textSecondary" style={{fontSize: 14,}} gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2" style={{marginTop:'-5px'}}>
          
          <h2>Terms and Conditions</h2>
          <p style={{color:'white'}}><i>...you accepts by using this site</i></p>
        </Typography>
       
      </CardContent>

    </Card>);


let others =(<div>

      <Card className={classes.card}>
                  <CardContent >
                    <Typography  color="textSecondary" style={{fontSize: 14,}} gutterBottom>
                      
                    </Typography>
                    <div style={{float:'left',fontSize:'60px', color:'white'}}><i></i></div><br/>
                    <Typography variant="h5" component="h2" style={{marginTop:'-5px'}}>
                      
                    <h5>Lostfinder use the information held about you in the following ways:</h5>
                    <ul style={{color:'white'}}>
                    <li> To provide you with the necessary service you required </li>
                    <li>To carry out our obligations arising from any contracts entered into between you and us and to provide you with the information and services that you request from us.</li>
                    <li>To provide you with information about other products and services we just launched, or those of partners or parent bodies – in order to bring you the best services.</li>
                    <li>To notify you about changes to our company or services.</li>
                    </ul>

                    <hr/>

    <ul style={{color:'white'}}>
    <li>More so, LostFinder and her associates, partners are not liable to any damages incurred by the use of this platform and other services.</li>
  <li>We shall not be answerable to any charges or whatsoever.</li>
<li>The use of this platform and other services implies you agree with these terms and conditons.</li>
</ul>


                    </Typography>
                    
                  </CardContent>
                </Card>

      <Card className={classes.card}>
      <CardContent >
  
        <Typography variant="h5" component="h2" style={{marginTop:'-5px'}}>
          <span style={{color:'white'}}><i>...some </i></span>
          <h2>SAFETY TIPS</h2>
      <ol style={{color:'white'}} id='safety'>
      <li>Meet only in public places.</li>
      <li>Go with friends.</li>
      <li>You may request for identity cards before meeting</li>
      <li>Call their phone number and run it over TrueCaller or similar apps to confirm names and other details.</li>
      <li>Do not get into their cars.</li>
      </ol>
        </Typography>
       
      </CardContent>

    </Card>

  </div>);

  return (
  <div>

  {heading}
  {others}
 

  </div>
  );
}
