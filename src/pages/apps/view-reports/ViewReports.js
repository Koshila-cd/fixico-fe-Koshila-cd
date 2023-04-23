import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Header from '../header/header';
import ViewReport from './viewReport';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
    ].join(','),
  },
});

function ViewReports() {

  const reportsList = [
    {
      "id": 1,
      "name": "FDR-21-Audi-R8",
      "date": "12/04/2023",
      "status": "On Review"
    },
    {
      "id": 2,
      "name": "FDR-5-Audi-R8",
      "date": "12/12/2020",
      "status": "Processed"
    }
  ];

  // open view report dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Damage Reports" variant="h6" />
      <Container component="main" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, width: "100%" }}>
        {reportsList && reportsList.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Report Name</TableCell>
                  <TableCell>Date of Submission</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportsList.map(report => {
                  return (
                <TableRow key={report.id}>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>{report.status}</TableCell>
                <TableCell>
                  <Button onClick={handleClickOpen}>View</Button>
                  <ViewReport setOpen={setOpen} open={open} report={null} page={'viewReports'} />
                </TableCell>
                </TableRow>
                );
              })}
            </TableBody>
          </Table>
          ) : (
          <span>No reports found</span>
          )} 
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default ViewReports;
