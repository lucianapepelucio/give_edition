import React, { useState } from 'react';
import { Avatar, Badge, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CreateIcon from '@material-ui/icons/Create';
import UserList from './CollaborationListUsers';

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
    position: "absolute",
    bottom: 5,
    right: -10,
  },
  editorAvatar: {
    margin: theme.spacing(1),
    border: '3px solid #138848',
  },
  avatar: {
    margin: theme.spacing(1),
  },
}));

export default function GroupAvatars({ user }) {
  const classes = useStyles();
  const [showUserList, setShowUserList] = useState(false);

  const handleMouseHover = () => {
    setShowUserList(!showUserList);
  }

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="row">
          <Grid item xs={1} sm={2} md={3}>
            <Badge
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              badgeContent={<CreateIcon className={classes.icon} />}
            >
              <Avatar
               alt="editor" 
               src="" 
               className={classes.editorAvatar}
               onMouseEnter={handleMouseHover}
               onMouseLeave={handleMouseHover}
              />
            </Badge>

            {showUserList && (
              <UserList />
            )}
          </Grid>
          
          <Grid item xs={1} sm={2} md={3} className={classes.avatar}>
            <AvatarGroup max={3}>
              <Avatar alt="" src="" />
              <Avatar alt="" src="" />
              <Avatar alt="" src="" />
              <Avatar alt="" src="" />
              <Avatar alt="" src="" />
              {/* {users.map((user, index) => (
                <Avatar key={index} alt={user.name} src={user.avatarSrc} />
              ))} */}
            </AvatarGroup>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
