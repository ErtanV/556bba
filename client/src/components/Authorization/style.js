import { makeStyles } from "@material-ui/core";
import backgroundPicture from "../../assets/converse.jpg";
import chat from "../../assets/chat.svg";

export const useAuthStyles = makeStyles((theme) => ({
  // --- Login/Signup
  autorizationContainer: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },

  dataContainer: {
    minWidth: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },

  formContainer: {
    margin: "auto",
  },

  header: {
    fontWeight: "bold",
    margin: "20px 0",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: "17px",
    },
  },

  // ---ImageConverse.js
  imageContainer: {
    margin: "auto 0",
    minHeight: "100vh",
    minWidth: "40%",
    backgroundSize: "cover",
    backgroundImage: `url(${backgroundPicture}) `,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  textChat: {
    background: "linear-gradient(180deg, #2F84F9 0%, #86B9FF 100%) ",
    minHeight: "100vh",
    opacity: 0.85,
  },

  textChatImage: {
    width: "80px",
    height: "80px",
    background: `url(${chat}) no-repeat`,
    alignContent: "center",
    margin: "0 auto",
  },

  converse: {
    color: "#fff",
    fontSize: "26px",
    textAlign: "center",
    padding: "10px",
  },

  // --- FormControl.js
  topBoxTextBtn: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    padding: "30px",
  },
  textTop: {
    color: "#B0B0B0",
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
  label: {
    color: "#B0B0B0",
    padding: "20px 0",
    fontSize: "15px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: "10px 0",
    },
  },
  // ---Buttons
  submitBtn: {
    justifyContent: "center",
    background: "#3A8DFF",
    borderRadius: "3px",
    color: "#fff",
    padding: "14px 44px",
    fontSize: "14px",
    marginTop: "40px",
    maxWidth: "150px",
  },

  link: {
    textDecoration: "none",
  },

  redirectBtn: {
    fontSize: "14px",
    color: "#3A8DFF",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: "5px",
    padding: "16px 33px",
    marginLeft: "30px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "14px 24px",
      margin: "20px 0 0 0 ",
    },
  },

  // --- Input.js
  inputField: {
    minWidth: "400px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "200px",
    },
  },
}));
