import { Container, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../Images/404.jpg'

const NotFound = () => {
    return (
        <Container sx={{textAlign:'center', my: 5}}>
            <Typography variant='h3' component="h2" >
                Page not found!
            </Typography>
            <Button variant="contained" size="large" sx={{ display: 'block',  mt: 4, mb: 2 }}><Link to="/" style={{ textDecoration: 'none', color: '#ffffff' }}>Back to Home</Link></Button>
            <img src={notFoundImg} style={{maxWidth: '800px',}} />
        </Container>
    );
};

export default NotFound;