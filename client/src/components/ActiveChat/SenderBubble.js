import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  textWrap: {
    wordWrap: "break-word",
    maxWidth: "150px",
  },
  bubble: {
    margin: "5px 0",
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
  bubbleNone: {
    background: "none",
  },
  attachments: {
    margin: "0 0 0 10px",
    width: "150px",
    height: "120px",
    borderRadius: "8px",
    borderBottomRightRadius: "0px",
  },
  singleAttachment: {
    margin: "0px",
  },
  AttachWithText: {
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  multipleAttachment: {
    width: "100px",
    height: "70px",
    margin: "0 0 0 5px",
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();

  if (attachments?.length === 1 && text?.length === 0) {
    return (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={[classes.bubble, classes.bubbleNone].join(" ")}>
          {attachments?.map((val, index) => (
            <img
              src={val}
              key={index}
              alt="attachments"
              className={[classes.attachments, classes.singleAttachment].join(
                " "
              )}
            />
          ))}
        </Box>
      </Box>
    );
  }

  if (attachments?.length > 1 && text?.length > 0) {
    return (
      <Box className={classes.root}>
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
        <Box className={[classes.bubble, classes.bubbleNone].join(" ")}>
          {attachments?.map((val, index) => (
            <img
              src={val}
              key={index}
              alt="attachments"
              className={[classes.attachments, classes.multipleAttachment].join(
                " "
              )}
            />
          ))}
        </Box>
        <Typography className={classes.date}>{time}</Typography>
      </Box>
    );
  }

  if (attachments?.length === 1 && text?.length > 0) {
    return (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes.bubble}>
          {attachments?.map((val, index) => (
            <img
              src={val}
              key={index}
              alt="attachments"
              className={[
                classes.attachments,
                classes.AttachWithText,
                classes.singleAttachment,
              ].join(" ")}
            />
          ))}
          <Typography className={[classes.text, classes.textWrap].join(" ")}>
            {text}
          </Typography>
        </Box>
      </Box>
    );
  }

  if (attachments?.length > 1 && text?.length === 0) {
    return (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={[classes.bubble, classes.bubbleNone].join(" ")}>
          {attachments?.map((val, index) => (
            <img
              src={val}
              key={index}
              alt="attachments"
              className={[classes.attachments, classes.multipleAttachment].join(
                " "
              )}
            />
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SenderBubble;
