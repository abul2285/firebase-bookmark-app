import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Profile from "../Profile";
import BookrmarkForm from "../BookmarkForm";
import LogOut from "../Button/LogOutButton";
import LogIn from "../Button/LogInForm";
import SignUp from "../Button/SignUpForm";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector(state => state.firebase.auth);
  const profile = useSelector(state => state.firebase.profile);
  return (
    <AppBar style={{ height: "60px" }}>
      <Toolbar style={{ margin: "0 auto" }}>
        {auth.uid ? (
          <>
            <Profile />
            <BookrmarkForm profile={profile} auth={auth} />
            <LogOut />
          </>
        ) : (
          <>
            <LogIn />
            <SignUp />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
