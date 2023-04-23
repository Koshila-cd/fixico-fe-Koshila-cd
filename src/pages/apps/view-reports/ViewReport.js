import * as React from 'react';
import { Button, Container, Dialog, DialogActions, DialogTitle, Grid, List, ListItem, ListItemText, Paper, Slide, Typography } from '@mui/material';
import { mockReport } from '../../api/mock';

const reportTitles = ['Brand of Vehicle', 'Model of Vehicle', 'Vehicle License Number', 'Date of Damage', 'Location of Damage', 'Damage Description', 'Driver\'s Full Name', 'Driver\'s Licesnse Number', 'Witnesses Full Name']

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ViewReport(props) {

    const report = props.page == 'viewReports' ? mockReport : props.report;

    const handleClose = () => {
        props.setOpen(false);
    };

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
                                {/* {reportTitles.map((title) => (
                                    <> */}
                                <ListItem  >
                                    <ListItemText primary={'Brand of Vehicle: '} />
                                    <Typography variant="body2">{report.vehicleBrand}</Typography>
                                </ListItem>
                                <ListItem  >
                                    <ListItemText primary={'Model of Vehicle: '} />
                                    <Typography variant="body2">{report.vehicleModel}</Typography>
                                </ListItem>
                                <ListItem  >
                                    <ListItemText primary={'Vehicle License Number: '} />
                                    <Typography variant="body2">{report.licenceNo}</Typography>
                                </ListItem>
                                <ListItem  >
                                    <ListItemText primary={'Date of Damage: '} />
                                    <Typography variant="body2">{report.damageDate}</Typography>
                                </ListItem>
                                <ListItem  >
                                    <ListItemText primary={'Location of Damage: '} />
                                    <Typography variant="body2">{report.damageLocation}</Typography>
                                </ListItem>
                                <ListItem  >
                                    <ListItemText primary={'Damage Description: '} />
                                    <Typography variant="body2">{report.damageDescription}</Typography>
                                </ListItem>
                                <ListItem  >
                                    <ListItemText primary={'Driver\'s Full Name: '} />
                                    <Typography variant="body2">{report.driverName}</Typography>
                                </ListItem>
                                <ListItem  >
                                    <ListItemText primary={'Driver\'s Licesnse Number: '} />
                                    <Typography variant="body2">{report.drivingLicense}</Typography>
                                </ListItem>
                                <ListItem  >
                                    <ListItemText primary={'Witnesses Full Name: '} />
                                    <Typography variant="body2">{report.witnessName}</Typography>
                                </ListItem>
                                {/* </>
                                ))} */}
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
