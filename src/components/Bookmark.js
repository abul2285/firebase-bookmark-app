import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  ListItemAvatar
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const Bookmark = ({ bookmark }) => {
  return (
    <>
      <Paper variant="elevation" elevation={5} style={{ marginTop: "10px" }}>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar style={{ color: "green", backgroundColor: "orange" }}>
                {bookmark.initials}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${bookmark.firstName} ${bookmark.lastName}`}
              secondary={
                <Link
                  to={bookmark.url}
                  style={{
                    textDecoration: "none",
                    color: "blue"
                  }}
                >
                  <FaLink
                    color="gray"
                    size="10"
                    style={{ marginRight: "10px" }}
                  />
                  <Typography
                    variant="body1"
                    component="span"
                    color="textSecondary"
                    className="bookmark--link"
                  >
                    {bookmark.title}
                  </Typography>
                </Link>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

export default Bookmark;
