import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import { useMessageStyles } from "./messagesStyle";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
    margin: "5px 0",
  },
  otherBubble: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textOther: {
    color: "#FFFFFF",
  },
}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();
  const messageClasses = useMessageStyles();

  if (attachments?.length === 1 && text?.length === 0) {
    return (
      <Box className={classes.root}>
        <Avatar
          alt={otherUser.username}
          src={otherUser.photoUrl}
          className={classes.avatar}
        />
        <Box>
          <Typography className={messageClasses.date}>
            {otherUser.username} {time}
          </Typography>
          <Box
            className={[classes.bubble, messageClasses.bubbleNone].join(" ")}
          >
            {attachments?.map((val) => (
              <img
                src={val}
                key={val}
                alt="attachments"
                className={[
                  messageClasses.attachments,
                  messageClasses.singleAttachment,
                  messageClasses.otherUserAtt,
                ].join(" ")}
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  }

  if (attachments?.length > 1 && text?.length > 0) {
    return (
      <Box className={classes.root}>
        <Avatar
          alt={otherUser.username}
          src={otherUser.photoUrl}
          className={classes.avatar}
        />
        <Box className={classes.otherBubble}>
          <Box className={classes.bubble}>
            <Typography
              className={[classes.textOther, messageClasses.text].join(" ")}
            >
              {text}
            </Typography>
          </Box>
          <Box
            className={[classes.bubble, messageClasses.bubbleNone].join(" ")}
          >
            {attachments?.map((val) => (
              <img
                src={val}
                key={val}
                alt="attachments"
                className={[
                  messageClasses.attachments,
                  messageClasses.otherUserAtt,
                  messageClasses.multipleAttachment,
                ].join(" ")}
              />
            ))}
          </Box>
          <Typography className={messageClasses.date}>
            {otherUser.username} {time}
          </Typography>
        </Box>
      </Box>
    );
  }

  if (attachments?.length === 1 && text?.length > 0) {
    return (
      <Box className={classes.root}>
        <Avatar
          alt={otherUser.username}
          src={otherUser.photoUrl}
          className={classes.avatar}
        />
        <Box>
          <Typography className={messageClasses.date}>
            {otherUser.username} {time}
          </Typography>
          <Box className={classes.bubble}>
            {attachments?.map((val) => (
              <img
                src={val}
                key={val}
                alt="attachments"
                className={[
                  messageClasses.attachments,
                  messageClasses.otherAttachWithText,
                  messageClasses.singleAttachment,
                ].join(" ")}
              />
            ))}
            <Typography
              className={[
                classes.textOther,
                messageClasses.textWrap,
                messageClasses.text,
              ].join(" ")}
            >
              {text}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  if (attachments?.length > 1 && text?.length === 0) {
    return (
      <Box className={classes.root}>
        <Avatar
          alt={otherUser.username}
          src={otherUser.photoUrl}
          className={classes.avatar}
        />
        <Box>
          <Typography className={messageClasses.date}>
            {otherUser.username} {time}
          </Typography>
          <Box
            className={[classes.bubble, messageClasses.bubbleNone].join(" ")}
          >
            {attachments?.map((val) => (
              <img
                src={val}
                key={val}
                alt="attachments"
                className={[
                  messageClasses.attachments,
                  messageClasses.multipleAttachment,
                  messageClasses.otherUserAtt,
                ].join(" ")}
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={messageClasses.date}>
          {otherUser.username} {time}
        </Typography>
        <Box className={classes.bubble}>
          <Typography
            className={[classes.textOther, messageClasses.text].join(" ")}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
