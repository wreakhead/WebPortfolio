import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btnStyle: {
    fontWeight: "500",
    fontSize: "12px",
    
    background:'',
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: "50px",
    transition: "0.5s",
    color: "darkslategray",
    border: "2px solid darkslategray",
    textDecoration: "none",
    "&:hover": {
      background: "darkslategray",
      color: "#fff",
      textDecoration: "none",
    },
  },
});

const  SmallButton=(props)=> {
  const classes = useStyles();
  
  
  

  return (
    <>
      <a href={props.link} className={classes.btnStyle}>
        {props.name}
      </a>
    </>
  );
}

export default SmallButton;
