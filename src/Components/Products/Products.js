import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = (props) => {
    const show = props.show ;
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://mysterious-ridge-83702.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    if(!products.length){
        return(
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Container>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.slice(0, show).map(product =>
                        <Product product={product} key={product._id}></Product>
                    )
                }
            </Grid>
        </Container>
    );
};

export default Products;