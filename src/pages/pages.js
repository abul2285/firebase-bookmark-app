import React from "react";
import Home from "./home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import "../style.css";

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children;
}

const Pages = () => {
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <div>Auth is Loaded</div> {/* Rest of App Components */}
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
};

export default Pages;
