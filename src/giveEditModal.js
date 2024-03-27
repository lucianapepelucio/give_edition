import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

const giveContent = withStyles(styles)(({ onClose, classes }) => {
 
  const handleGiveEdit = () => {
    // adicionar a lógica para conceder a edição
  };

  const handleCloseGiveEditModal = () => {
    onClose();
  }

  return (
    <Grid container direction="row">
      <Grid item xl={12}>
        <Grid container
         className={classes.containerContent}
         justifyContent="center"
         alignItems="center"
        >
          <Grid item xl={3} className={classes.avatar}>
            <div>
              <img alt=""/>
            </div>
          </Grid>
          <Grid item xl={9} className={classes.contentText}>
            <Typography>
              <div>
               Ao conceder a edição, você não poderá editar o documento enquanto 
               <strong>nome de quem solicitou</strong> <i>(e-mail de quem solicitou)</i>
               estiver editando.
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="flex-end">
        <DialogActions className={classes.containerActions}>
          <Button
          variant="outlined" 
          color="default"
          onClick={handleCloseGiveEditModal} 
          className= {classes.cancelButton}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGiveEdit}
            className={classes.principalButton}
            >
            Conceder edição
          </Button>
        </DialogActions>
      </Grid>
    </Grid>
  );
});

export default giveContent;

