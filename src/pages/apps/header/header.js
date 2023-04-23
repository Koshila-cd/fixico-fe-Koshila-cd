import { ChevronLeftIcon } from '@heroicons/react/solid';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import * as React from 'react';

function Header(props) {

    console.log(props.header)
    return (
        <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
        >
            {props.page == "home" ? (
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Typography sx={{ fontWeight: 'Bold' }} variant={props.variant} color="inherit" >
                        {props.title}
                    </Typography>
                </Toolbar>
            ) : (
                <Toolbar>
                    <Button href='/apps/home/Home'>
                        <ChevronLeftIcon className="" />
                    </Button>
                    <Typography variant={props.variant} color="inherit" >
                        {props.title}
                    </Typography>
                </Toolbar>
            )}

        </AppBar>
    )
}

export default Header;
