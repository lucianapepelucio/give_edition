import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

export default function GroupAvatars() {
  return (
    <Grid container direction="row">
      <Grid item>

      </Grid>
      <Grid item>
        <AvatarGroup max={3}>
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Travis Howard" src="" />
          <Avatar alt="Cindy Baker" src="" />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
      </Grid>
    </Grid>
  );
}
