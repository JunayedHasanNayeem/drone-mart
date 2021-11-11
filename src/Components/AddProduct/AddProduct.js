import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const AddProduct = () => {

    const initialProductData = {
        title: '',
        category: '',
        price: '',
        img: '',
        description: ''
    }
    const [productData, setProductData] = useState(initialProductData)

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...productData };
        newData[field] = value;
        setProductData(newData);
    }
    const handleAddProduct = () => {
        fetch('https://mysterious-ridge-83702.herokuapp.com/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
        document.addProductForm.reset()
        alert("Product added Successfully!")
    }

    return (
        <Container>
            <Box sx={{ maxWidth: '500px', mx: 'auto' }}>
                <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                    Add a new product
                </Typography>
                <form name="addProductForm">
                    <TextField
                        id="outlined-textarea"
                        label="Product Title"
                        fullWidth sx={{ my: 1 }}
                        name="title"
                        onBlur={handleOnBlur}
                    />
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <TextField id="outlined-textarea"
                                label="Category"
                                fullWidth
                                name="category"
                                onBlur={handleOnBlur}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-textarea"
                                type="number"
                                label="Price"
                                fullWidth
                                name="price"
                                onBlur={handleOnBlur}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        id="outlined-textarea"
                        label="Image URL"
                        fullWidth
                        sx={{ my: 1 }}
                        name="img"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        rows={6} multiline
                        fullWidth
                        sx={{ mb: 1 }}
                        name="description"
                        onBlur={handleOnBlur}
                    />
                </form>
                <Button onClick={handleAddProduct} sx={{ mt: 1 }} variant="contained" size="large" fullWidth >Add Product</Button>
            </Box>
        </Container>
    );
};

export default AddProduct;