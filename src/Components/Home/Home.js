import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import droneImg from '../../Images/drone-1.jpg'
import './Home.css'
const Home = () => {
    return (
        <main>
            <Header />
            {/* Home Top Banner */}
            <Box className="home-top-banner">
                <Container>
                    <Typography variant="h3" component="div" sx={{ color: '#ffffff', textAlign: 'center' }}>
                        Purchase Innovative <br /> Drones With Us
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '500px', color: '#ffffff', fontSize: '16px', textAlign: 'center', mx: 'auto', my: 3 }}>
                        DroneMart was established in 2012 and was one of the first suppliers of drone and components from building drones in Europe. We are official partners of world's best drone brands: DJI, DJI Enterprise, Flir, Pixhawk, Pix4D, ElevonX, Cube Autopilot, Mauch Electronics, Team BlackSheep, RFDesign, ImmersionRC, FatShark
                    </Typography>
                    <div className="d-flex justify-content-center">
                        <Link to="/all-products" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" size="large" sx={{ mt: 3, borderColor: '#ffffff', color: '#ffffff' }}>Explore Drones</Button>
                        </Link>
                    </div>
                </Container>
            </Box>

            {/* Products area */}
            <Container sx={{ my: 5 }}>
                <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 3 }}>
                    <Divider>
                        Newest Arrivals
                    </Divider>
                </Typography>
                <Products show={6}></Products>
                <div className="d-flex justify-content-center">
                    <Link to="/all-products" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" size="large" sx={{ mt: 5 }}>Explore More</Button>
                    </Link>

                </div>
            </Container>

            {/* About Drones */}
            <Container sx={{py: 5}}>
                <Grid container columns={{ xs: 6, md: 12 }}>
                    <Grid item xs={6} md={6}>
                        <img src={droneImg} style={{ width: '90%' }} />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography variant="h4" component="div">
                            Professional Drones for Aerial Photography
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px', my: 3 }}>
                            You can find great selection of interesting products on our website ... but here you can find the latest special products from the most interesting categories. Featured products, bestsellers, newest product and products with special action prices are here for you.
                        </Typography>
                        <Link to="/all-products" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="large" >Explore Drones</Button>
                    </Link>
                    </Grid>
                </Grid>
            </Container>

            {/* Testimonials */}
            <Container sx={{ my: 5 }}>
                <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 3 }}>
                    <Divider>
                        Testimonials
                    </Divider>
                </Typography>
                <Reviews></Reviews>
            </Container>
            <Footer />
        </main>
    );
};

export default Home;