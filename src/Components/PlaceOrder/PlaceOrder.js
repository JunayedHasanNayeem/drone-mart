import { CardActions, CardContent, Container, Card, Grid, Typography, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const PlaceOrder = () => {
    const { user } = useAuth()
    const { id } = useParams();

    //Fetch item data
    const [product, setProduct] = useState({})
    const url = `https://mysterious-ridge-83702.herokuapp.com/products/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    //Post Order Data

    const nameRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();

    const handleSubmit = (e) => {
        const name = nameRef.current.value
        const orderData = {
            title: product.title,
            price: product.price,
            productId: product._id,
            img: product.img,
            name: nameRef.current.value,
            email: user.email,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            status: 'Pending'
        }
        fetch('https://mysterious-ridge-83702.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        })
        e.preventDefault()
        document.placeOrderForm.reset()
        alert("Order has been placed successfully!")
    }


    return (
        <Box>
            <Header/>
            <Container>
                <Card variant="outlined" sx={{ maxWidth: '500px', mx: 'auto', my: 5 }}>
                    <div className="d-flex justify-content-center">
                        <img src={product.img} style={{ width: '100%', height: '250px', objectFit: 'cover' }} alt="Drone Image" />
                    </div>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <div className="d-flex justify-content-between mt-3">
                            <Typography sx={{ my: 1 }} color="text.secondary">
                                {product.category}
                            </Typography>
                            <Typography sx={{ my: 1, fontWeight: '600' }} color="text.secondary">
                                ${product.price}
                            </Typography>
                        </div>

                        <form className="mt-3" onSubmit={handleSubmit} name="placeOrderForm">
                            <TextField
                                id="outlined-textarea"
                                defaultValue={user.displayName}
                                label="Name"
                                fullWidth sx={{ my: 1 }}
                                name="name"
                                type="text"
                                inputRef={nameRef}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Email"
                                fullWidth sx={{ my: 1 }}
                                defaultValue={user.email}
                                name="email"
                                type="email"
                                disabled
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Address"
                                fullWidth
                                sx={{ my: 1 }}
                                name="address"
                                inputRef={addressRef}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Phone"
                                fullWidth
                                sx={{ my: 1 }}
                                name="phone"
                                inputRef={phoneRef}
                            />
                            <CardActions size="large" variant="contained" sx={{ p: 0, mt: 2 }} >
                                <Button size="large" type="submit" variant="contained" fullWidth>Confirm Order</Button>
                            </CardActions>
                        </form>

                    </CardContent>

                </Card>
            </Container >
            <Footer/>
        </Box>
    );
};

export default PlaceOrder;