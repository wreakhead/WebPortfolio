import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btnStyle: {
    fontWeight: "500",
    fontSize: "16px",
    letterSpacing: "1px",

    display: "inline-block",
    padding: "10px 30px",
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

const CustomButton = (props) => {
  const classes = useStyles();
  return (
    <>
      <NavLink to={props.route} className={classes.btnStyle}>
        {props.buttonName}
      </NavLink>
    </>
  );
};
export default CustomButton;
