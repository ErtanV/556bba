import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { FormControl, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    padding: "20px",
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: "8px",
  },
  iconFile: {
    cursor: "pointer",
    color: "rgb(166, 166, 166)",
  },
  fileInput: {
    display: "none",
  },
  imagePreview: {
    cursor: "pointer",
    margin: "0 10px",
    width: "50px",
    height: "50px",
    borderRadius: "8px",
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const [src, setSrc] = useState([]);
  const [img, setImg] = useState([]);

  const classes = useStyles();
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: img.map((el) => el.data?.url),
    };
    await postMessage(reqBody);
    setText("");
    setImg([]);
  };

  const onChange = useCallback(
    (e) => {
      setSrc(Array.from(e.target.files));
    },
    [setSrc]
  );

  const onFileUpload = useCallback(async () => {
    const response = await Promise.all(
      src.map((el) => {
        const formData = new FormData();
        formData.append("file", el, el.name);
        return axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload?upload_preset=bwvkc1tp`,
          formData
        );
      })
    );
    setImg(response);
  }, [src]);

  useEffect(() => {
    if (src.length > 0) {
      onFileUpload();
    }
  }, [src, setSrc, onFileUpload]);

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <TextField
          id="input-with-icon-textfield"
          variant="standard"
          classes={{ root: classes.input }}
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="start">
                {img?.map((val) => (
                  <img
                    src={val.data?.url}
                    key={val.data.asset_id}
                    alt="attachments"
                    className={classes.imagePreview}
                  />
                ))}
                <label className="file-label">
                  <AttachFileIcon className={classes.iconFile} />
                  <input
                    className={classes.fileInput}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={onChange}
                  />
                </label>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </form>
  );
};

export default Input;
