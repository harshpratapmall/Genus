import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button variant="contained"   color="inherited" onClick={handleClickOpen}>
        Instructions  
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Go through each point very carefully for your own convenience-"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <li> You can't miss even a single class, however if it happens mak a recovery as soon as possible.7
            </li>

            <li> You have to complete the homework on a regular basis.
            </li>
            <li> If you have any problem or doubt with the concept, you should out it infront of us immediately.
            </li>

            <li>If you were having any problemwhile attending the class, you must inform us once the class is over.
            </li>

            <li> Before attending the class make sure that you have a proper internet connection.
            </li>

            <li>Connect atleast 10 minutes before the class time.
            </li>

            <li>You must keep your video ON while attending the class.
            </li>

            <li>Student should have a very good practise of mute and unmute of audio.
            </li>

            <li>Student must sit in a room of zero disturbance.
            </li>
            
            <li>
              Don't share class link with any outsider this is only for you.
            </li>

            <li>
              If you don't recieve the class link inform us atleast 2 hours before the class time.
            </li>
            
            <li>
              Recording of this class is strictly prohibited in any form. Kindly refrain from indulging in such activities.
            </li>

            <li>
              |Please note down all the material and questions provided to you in your notebook positively.
            </li>

            <li>
              Student should maintain the decorum of the class.
            </li>

            <li>
              Tution fee is payable i two installments- 1: At the time of admission. 2: Afterward.
            </li>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
