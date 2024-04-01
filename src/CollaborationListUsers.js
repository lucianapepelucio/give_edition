import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(1),
    width: '100%',
    maxWidth: 360,
    border: "1px solid #E0E0E0",
    borderRadius: 6,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    float: "left",
    backgroundColor: "green",
  },
}));

export default function UserList() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <List>
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.avatar}>
                    <img alt="" src="" />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="User1" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.avatar}>
                    <img alt="" src="" />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="User2" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.avatar}>
                    <img alt="" src="" />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="User3" />
        </ListItem>
      </List>
    </Grid>
  );
}
