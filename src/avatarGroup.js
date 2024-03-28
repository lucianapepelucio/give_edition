import React from 'react';
import { Avatar, Badge, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    border: "1px solid #E0E0E0",
    display: 'flex',
  },
  icon: {
    color: "#138848",
  },
  editorAvatar: {
    margin: theme.spacing(1),
    border: '3px solid #138848',
  },
  avatar: {
    margin: theme.spacing(1),
  },
}));

export default function GroupAvatars() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="row">
          <Grid item xs={1} sm={2} md={3}>
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              badgeContent={<CreateIcon className={classes.icon} />}
            >
              <Avatar alt="editor" src="" className={classes.editorAvatar} />
            </Badge>
          </Grid>
          
          <Grid item xs={1} sm={2} md={3} className={classes.avatar}>
            <AvatarGroup max={3}>
              <Avatar alt="user.name" src="" />
              <Avatar alt="user.name" src="" />
              <Avatar alt="user.name" src="" />
              <Avatar alt="user.name" src="" />
              <Avatar alt="user.name" src="" />
            </AvatarGroup>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
