import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "70%",
    margin: "auto",
    textAlign: "left",
    backgroundColor: "black",
    color: "yellow",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

let faqs;

export default function Faqs(props) {
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [idClicked, setIdClicked] = React.useState("null");

  let heading = (
    <Card
      style={{
        minWidth: 275,
        maxWidth: "70%",
        margin: "auto",
        textAlign: "left",
        backgroundColor: "black",
        color: "yellow",
        marginBottom: "10px",
      }}
    >
      <CardContent>
        <Typography
          color="textSecondary"
          style={{ fontSize: 14 }}
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="h2" style={{ marginTop: "-5px" }}>
          <p style={{ color: "white" }}>here are answers to...</p>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </Typography>
      </CardContent>
    </Card>
  );

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("x-access-client-token", process.env.REACT_APP_client_token);

  var requestOptions = {
    method: "get",
    headers: myHeaders,
  };

  fetch(`${process.env.REACT_APP_backEndAPI_URL}/faqs`, requestOptions)
    .then((results) => results.json())
    .then((results) => {
      faqs = results.faqs.map((result) => {
        return (
          <Card
            style={{
              minWidth: 275,
              maxWidth: "70%",
              margin: "auto",
              textAlign: "left",
              backgroundColor: "black",
              color: "yellow",
              marginBottom: "10px",
            }}
          >
            <CardContent>
              <Typography
                color="textSecondary"
                style={{ fontSize: 14 }}
                gutterBottom
              ></Typography>
              <div style={{ float: "left", fontSize: "60px", color: "white" }}>
                <i>{result.questionNumber}</i>
              </div>
              <br />
              <Typography
                variant="h5"
                component="h2"
                style={{ marginTop: "-5px" }}
              >
                {result.question}
              </Typography>

              <Typography
                variant="body2"
                component="p"
                style={{
                  color: "white",
                  marginBottom: "15px",
                  paddingBottom: "0px",
                }}
              >
                {result.answer}
              </Typography>
            </CardContent>
          </Card>
        );
      });

      setIsLoaded(true);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div>
      {heading}
      {(isLoaded && faqs) ||
        (!isLoaded && (
          <CircularProgress
            id={"loader"}
            size={100}
            thickness={20}
            style={{ color: "black" }}
          />
        ))}
    </div>
  );
}
