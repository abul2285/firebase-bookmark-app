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
import { FaSignInAlt } from "react-icons/fa";
import { withFirebase } from "react-redux-firebase";
import Heading from "../Heading";

const LogIn = ({ firebase }) => {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    firebase.login({ email, password });
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Log In">
        <IconButton onClick={() => setOpen(true)}>
          <FaSignInAlt />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <Heading>Login</Heading>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Box my={3}>
              <TextField
                type="email"
                variant="outlined"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                label="Email"
                required
                fullWidth
              />
            </Box>
            <Box my={3}>
              <TextField
                type="password"
                variant="outlined"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                label="password"
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
              Login
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default withFirebase(LogIn);
