import React, { useState } from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Tooltip
} from "@material-ui/core";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Tooltip title="View Profile">
        <IconButton onClick={handleOpen}>
          <FaUserCircle />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>User Profile</DialogTitle>
        <DialogContent>
          <h2>some text will be gose here</h2>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Profile;
