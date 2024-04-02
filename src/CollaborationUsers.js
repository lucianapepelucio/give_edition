import React, { useState } from 'react';
import { Avatar, Badge, Grid, Paper, Menu, MenuItem } from '@material-ui/core';
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

export default function GroupAvatars(/*{ user }*/) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="row" 
          aria-controls="simple-menu" 
          aria-haspopup="true" 
          onClick={handleClick}
        >
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
              />
            </Badge>
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

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Avatar className={classes.editorAvatar}>
                <img alt="" src="" />
              </Avatar>
              <p>user.name</p>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar className={classes.avatar}>
                <img alt="" src="" />
              </Avatar>
              <p>user.name</p>
            </MenuItem>
          </Menu>

        </Grid>
      </Paper>
    </Grid>
  );
}
