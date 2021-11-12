import { CircularProgress, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdminRoute from '../SignIn/AdminRoute'

import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import ManageOrders from '../ManageOrders/ManageOrders';
import useAuth from '../../Hooks/useAuth';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddchartIcon from '@mui/icons-material/Addchart';

const drawerWidth = 240;

const Dashboard = (props) => {
    //Verify Admin
    const { admin, logOut } = useAuth()

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let { path, url } = useRouteMatch();
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
                    <ListItem button>
                        <HomeOutlinedIcon sx={{ mr: 2 }} />
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to={`${url}/my-orders`} style={{ textDecoration: 'none', color: '#000000' }}>
                    <ListItem button>
                        <ShoppingCartOutlinedIcon sx={{ mr: 2 }} />
                        <ListItemText primary="My Orders" />
                    </ListItem>
                </Link>
                <Link to={`${url}/add-review`} style={{ textDecoration: 'none', color: '#000000' }}>
                    <ListItem button>
                        <StarBorderPurple500OutlinedIcon sx={{ mr: 2 }} />
                        <ListItemText primary="Add Review" />
                    </ListItem>
                </Link>
                <Link to={`${url}/pay`} style={{ textDecoration: 'none', color: '#000000' }}>
                    <ListItem button>
                        <CreditCardOutlinedIcon sx={{ mr: 2 }} />
                        <ListItemText primary="Pay" />
                    </ListItem>
                </Link>

                {
                    admin ?
                        <span>
                            <Divider sx={{ my: 1 }} />
                            <Link to={`${url}/manage-orders`} style={{ textDecoration: 'none', color: '#000000' }}>
                                <ListItem button>
                                    <ManageSearchOutlinedIcon sx={{ mr: 2 }} />
                                    <ListItemText primary="Manage Orders" />
                                </ListItem>
                            </Link>
                            <Link to={`${url}/manage-products`} style={{ textDecoration: 'none', color: '#000000' }}>
                                <ListItem button>
                                    <AddchartIcon sx={{ mr: 2 }} />
                                    <ListItemText primary="Manage Products" />
                                </ListItem>
                            </Link>
                            <Link to={`${url}/add-product`} style={{ textDecoration: 'none', color: '#000000' }}>
                                <ListItem button>
                                    <RateReviewOutlinedIcon sx={{ mr: 2 }} />
                                    <ListItemText primary="Add Product" />
                                </ListItem>
                            </Link>
                            <Link to={`${url}/make-admin`} style={{ textDecoration: 'none', color: '#000000' }}>
                                <ListItem button>
                                    <ManageAccountsOutlinedIcon sx={{ mr: 2 }} />
                                    <ListItemText primary="Make Admin" />
                                </ListItem>
                            </Link>
                        </span>
                        :
                        <Divider sx={{ my: 1 }} />

                }
                    <ListItem button onClick={logOut}>
                        <LogoutOutlinedIcon sx={{ mr: 2 }} />
                        <ListItemText primary="Sign Out" />
                    </ListItem>
            </List>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route path={`${url}/my-orders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <AdminRoute path={`${url}/manage-orders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${url}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${url}/add-product`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${url}/manage-products`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <Route path={`${url}/add-review`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${url}/pay`}>
                        <Pay></Pay>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

export default Dashboard;