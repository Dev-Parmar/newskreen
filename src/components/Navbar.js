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
                <Typography variant='h4' onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}> NewsKreen
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
        </AppBar>













        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        //     <div className="container-fluid">
        //         <Link className="navbar-brand" to="/">NewsKreen</Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/health">Health</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/business">Business</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/entertainment">Entertainment</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/sports">Sports</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/technology">Technology</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/science">Science</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>


    )
}

export default Navbar
