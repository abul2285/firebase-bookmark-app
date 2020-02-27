import React, { useState } from "react";
import {
  Tooltip,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box
} from "@material-ui/core";
import { FaUserPlus } from "react-icons/fa";
import { connect } from "react-redux";
import { withFirestore, withFirebase } from "react-redux-firebase";
import { compose } from "redux";
import Heading from "../Heading";

const SignUp = ({ firebase, firestore }) => {
  const [open, setOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        firestore.set(
          { collection: "users", doc: `${res.user.uid}` },
          { firstName, lastName, initials: firstName[0] + lastName[0] }
        );
      });
    console.log(firstName, lastName, email, password);
  };

  return (
    <>
      <Tooltip title="Sign Up">
        <IconButton onClick={() => setOpen(true)}>
          <FaUserPlus />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <Heading>Sign Up</Heading>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Box my={3}>
              <TextField
                type="text"
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                label="First Name"
                variant="outlined"
                required
                fullWidth
              />
            </Box>
            <Box my={3}>
              <TextField
                type="text"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                label="Last Name"
                variant="outlined"
                required
                fullWidth
              />
            </Box>
            <Box my={3}>
              <TextField
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
                required
                fullWidth
              />
            </Box>
            <Box my={3}>
              <TextField
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                label="password"
                variant="outlined"
                required
                fullWidth
              />
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Sign Up
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default compose(withFirestore, withFirebase)(SignUp);
