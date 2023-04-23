import * as React from 'react';
import { Button, Container, Dialog, DialogActions, DialogTitle, Grid, List, ListItem, ListItemText, Paper, Slide, Typography } from '@mui/material';
import { mockReport } from '../../api/mock';

const reportTitles = ['Brand of Vehicle', 'Model of Vehicle', 'Vehicle License Number', 'Date of Damage', 'Location of Damage', 'Damage Description', 'Driver\'s Full Name', 'Driver\'s Licesnse Number', 'Witnesses Full Name']

// slide-in transition for the view report dialog
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

  /**
   * ViewReport Component: A single report that is submitted can be viewed as a List formation in a Dialog popup.
   */
function ViewReport(props) {

    const report = props.page == 'viewReports' ? mockReport : props.report;

    const handleClose = () => {
        props.setOpen(false);
    };

    // common return function to reduce code reuse in lists
    const returnListItem = (title, value) => {
        return (
            <ListItem>
                <ListItemText primary={title} />
                <Typography variant="body2">{value}</Typography>
            </ListItem>
        );
    }

    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >

            <DialogTitle>{"Report Overview"}</DialogTitle>

            {/* start content */}
            <Container component="main" >
                <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
                    {report && report != null ? (
                        <>
                            <Typography variant="h6" gutterBottom>
                                {report.name}
                            </Typography>
                            <List disablePadding>
                                {returnListItem(reportTitles[0], report.vehicleBrand)}
                                {returnListItem(reportTitles[1], report.vehicleModel)}
                                {returnListItem(reportTitles[2], report.licenceNo)}
                                {returnListItem(reportTitles[3], report.damageDate)}
                                {returnListItem(reportTitles[4], report.damageLocation)}
                                {returnListItem(reportTitles[5], report.damageDescription)}
                                {returnListItem(reportTitles[6], report.driverName)}
                                {returnListItem(reportTitles[7], report.drivingLicense)}
                                {returnListItem(reportTitles[8], report.witnessName)}
                            </List>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                        Damage Photo
                                    </Typography>
                                </Grid>
                                <Grid item container direction="column" xs={12}>
                                    <Grid container>
                                        <img src='' alt='Damage Photo' />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
                    ) : (
                        <span>No report selected</span>
                    )}
                </Paper>
            </Container>
            {/* end content */}
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ViewReport;
