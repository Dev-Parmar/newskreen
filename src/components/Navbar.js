import { AppBar, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {

    const navItems = [
        {
            text: "Science",
            path: '/science'
        },
        {
            text: "Health",
            path: '/health'
        },
        {
            text: "Business",
            path: '/business'
        },
        {
            text: "Entertainment",
            path: '/entertainment'
        },
        {
            text: "Sports",
            path: '/sports'
        },
        {
            text: "Technology",
            path: '/technology'
        }
    ]

    const navigate = useNavigate()
    const location = useLocation()

    const checkActive = (path) => {
        if (path === location.pathname) {
            return "secondary.light"
        }
    }

    return (

        <AppBar color='secondary' sx={{ height: '4em' }}>
            <Toolbar>
                <Typography variant='h4' onClick={() => navigate('/')} sx={{ cursor: 'pointer', paddingRight: '3rem' }}> NewsKreen
                </Typography>
                <List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                    {navItems.map(item => (
                        <ListItemButton key={item.text} sx={{ backgroundColor: checkActive(item.path) }}>
                            <ListItem onClick={() => navigate(item.path)}>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        </ListItemButton>
                    ))}
                </List>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar
