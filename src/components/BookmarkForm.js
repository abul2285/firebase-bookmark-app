import React, { useState } from "react";
import {
  Tooltip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box
} from "@material-ui/core";
import { FaPlus } from "react-icons/fa";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import Heading from "./Heading";

const BookrmarkForm = ({ firestore, profile, auth }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    firestore.add(
      { collection: "bookmarks" },
      {
        title,
        url,
        bookmarkId: auth.uid,
        firstName: profile.firstName,
        lastName: profile.lastName,
        initials: profile.initials
      }
    );
    setTitle("");
    setUrl("");
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Add Bookmark">
        <IconButton onClick={handleOpen}>
          <FaPlus />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <Heading>Add Bookmark</Heading>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Box my={3}>
              <TextField
                type="text"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                label="Title"
                variant="outlined"
                fullWidth
                required
              />
            </Box>
            <Box my={3}>
              <TextField
                type="url"
                name="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                label="Bookmark"
                variant="outlined"
                fullWidth
                required
              />
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Submit Bookmark
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default compose(withFirestore)(BookrmarkForm);
