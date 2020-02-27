import React from "react";
import Bookmark from "../components/Bookmark";
import { Grid, Typography } from "@material-ui/core";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector, connect } from "react-redux";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const Home = () => {
  useFirestoreConnect([{ collection: "bookmarks" }]);
  const bookmarks = useSelector(state => state.firestore.ordered.bookmarks);
  const auth = useSelector(state => state.firebase.auth);

  let bookmarkMarkup =
    bookmarks &&
    bookmarks.length &&
    bookmarks.map(bookmark => {
      return <Bookmark key={bookmark.id} bookmark={bookmark} />;
    });

  return (
    <>
      <Grid
        container
        justify="center"
        style={{ margin: "60px auto", maxWidth: "1200px" }}
      >
        <Grid item sm={6}>
          <Heading style={{ margin: "20px" }}>BookMark List</Heading>
          {auth && auth.uid ? (
            bookmarkMarkup
          ) : (
            <Typography variant="body1" component="span" color="textPrimary">
              If you want to see bookmark list then login first..
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
