import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Button href='/apps/home/Home'>
            <ChevronLeftIcon className="" />
          </Button>
          <Typography variant="h6" color="inherit" >
            Damage Reports
            </Typography>
        </Toolbar>
      </AppBar>
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
                <TableCell><a href="">view</a></TableCell>
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
