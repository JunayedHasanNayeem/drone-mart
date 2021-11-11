import { Container, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllProducts = () => {
    return (
        <Box>
            <Header />
            <Container sx={{ my: 5 }}>
                <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 3 }}>
                    <Divider>
                        All Products
                    </Divider>
                </Typography>
                <Products></Products>
            </Container>
            <Footer/>
        </Box>
    );
};

export default AllProducts;