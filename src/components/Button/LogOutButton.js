import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";
import { FaSignOutAlt } from "react-icons/fa";
import { withFirebase } from "react-redux-firebase";

const LogOut = ({ firebase }) => {
  const handleLogout = () => {
    firebase.logout();
    console.log("logout success");
  };

  return (
    <Tooltip title="Log Out">
      <IconButton onClick={handleLogout}>
        <FaSignOutAlt />
      </IconButton>
    </Tooltip>
  );
};

export default withFirebase(LogOut);
