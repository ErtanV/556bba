import { makeStyles } from "@material-ui/core/styles";

export const useMessageStyles = makeStyles(() => ({
  bubbleNone: {
    background: "none",
    backgroundImage: "none!important",
  },
  attachments: {
    margin: "0 0 0 10px",
    width: "150px",
    height: "120px",
    borderRadius: "8px",
    borderBottomRightRadius: "0px",
  },
  otherUserAtt: {
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "0px",
  },
  singleAttachment: {
    margin: "0px",
  },
  AttachWithText: {
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  otherAttachWithText: {
    borderTopLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",
  },
  multipleAttachment: {
    width: "100px",
    height: "70px",
    margin: "0 0 0 5px",
  },
  textWrap: {
    wordWrap: "break-word",
    maxWidth: "150px",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: -0.2,
    padding: 8,
  },
}));
