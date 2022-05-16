import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { useMessageStyles } from "./messagesStyle";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  textSender: {
    color: "#91A3C0",
  },
  bubble: {
    margin: "5px 0",
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();
  const messageClasses = useMessageStyles();

  if (attachments?.length === 1 && text?.length === 0) {
    return (
      <Box className={classes.root}>
        <Typography className={messageClasses.date}>{time}</Typography>
        <Box className={[classes.bubble, messageClasses.bubbleNone].join(" ")}>
          {attachments?.map((val) => (
            <img
              src={val}
              key={val}
              alt="attachments"
              className={[
                messageClasses.attachments,
                messageClasses.singleAttachment,
              ].join(" ")}
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
          <Typography
            className={[classes.textSender, messageClasses.text].join(" ")}
          >
            {text}
          </Typography>
        </Box>
        <Box className={[classes.bubble, messageClasses.bubbleNone].join(" ")}>
          {attachments?.map((val) => (
            <img
              src={val}
              key={val}
              alt="attachments"
              className={[
                messageClasses.attachments,
                messageClasses.multipleAttachment,
              ].join(" ")}
            />
          ))}
        </Box>
        <Typography className={messageClasses.date}>{time}</Typography>
      </Box>
    );
  }

  if (attachments?.length === 1 && text?.length > 0) {
    return (
      <Box className={classes.root}>
        <Typography className={messageClasses.date}>{time}</Typography>
        <Box className={classes.bubble}>
          {attachments?.map((val) => (
            <img
              src={val}
              key={val}
              alt="attachments"
              className={[
                messageClasses.attachments,
                messageClasses.AttachWithText,
                messageClasses.singleAttachment,
              ].join(" ")}
            />
          ))}
          <Typography
            className={[
              classes.textSender,
              messageClasses.textWrap,
              messageClasses.text,
            ].join(" ")}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    );
  }

  if (attachments?.length > 1 && text?.length === 0) {
    return (
      <Box className={classes.root}>
        <Typography className={messageClasses.date}>{time}</Typography>
        <Box className={[classes.bubble, messageClasses.bubbleNone].join(" ")}>
          {attachments?.map((val) => (
            <img
              src={val}
              key={val}
              alt="attachments"
              className={[
                messageClasses.attachments,
                messageClasses.multipleAttachment,
              ].join(" ")}
            />
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.root}>
        <Typography className={messageClasses.date}>{time}</Typography>
        <Box className={classes.bubble}>
          <Typography
            className={[classes.textSender, messageClasses.text].join(" ")}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SenderBubble;
