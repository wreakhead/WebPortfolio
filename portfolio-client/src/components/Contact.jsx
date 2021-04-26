import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import SmallButtonTwo from "./SmallButtonTwo";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 200,
    justifyContent: "center",
    display: "flex",
    marginTop: "100px",
    marginRight: "50px",
    marginLeft: "50px",
    padding: "10px",
    background: "darkslategray",
    color: "#fff",
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
    marginBottom: 14,
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={classes.root}>
          <CardContent style={{ height: "300" }}>
            <Typography variant="h5" component="h2">
              LinkedIn{" "}
              <SmallButtonTwo
                name="visit"
                link="https://www.linkedin.com/in/mohd-imran-khan-55045a153"
              />
            </Typography>
            <Typography variant="body2" component="p" className={classes.pos}>
              Get my profile.
              <br />
            </Typography>

            <Typography variant="h5" component="h2">
              Gmail
            </Typography>
            <Typography variant="body2" component="p" className={classes.pos}>
              mohdimran.khan751@gmail.com
              <br />
            </Typography>

            <Typography variant="h5" component="h2">
              Github{" "}
              <SmallButtonTwo
                name="visit"
                link="https://github.com/wreakhead/"
              />
            </Typography>

            <Typography variant="body2" component="p">
              Git.
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Contact;
