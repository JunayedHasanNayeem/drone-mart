import { Grid, Container, Paper, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth()
    const email = user.email
    const [ordersLoading, setOrdersLoading] = useState(true);

    //Fetch Data From the server
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        const url = `https://mysterious-ridge-83702.herokuapp.com/orders/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
                setOrdersLoading(false)
            })
    }, [email])

    //Delete user order
    const handleDelete = (id) => {
        const proceedDelete = window.confirm('Are you sure you want to delete this order?');
        if (proceedDelete) {
            fetch(`https://mysterious-ridge-83702.herokuapp.com/orders/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = myOrders.filter(order => order._id !== id)
                        setMyOrders(remainingOrders)
                    }
                })
        }

    }
    //Conditional Spinner
    if (ordersLoading) {
        return (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )

    }

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                My Orders
            </Typography>
            {
                myOrders.map(order =>
                    <Paper sx={{ mb: 1 }} key={order._id}>
                        <Grid container columns={{ xs: 6, md: 12 }} sx={{ p: 2, mb: 2 }}>
                            <Grid item xs={6} md={6}>
                                <Typography variant="h6" component="div">
                                    {order.title}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {order.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6} className="d-flex align-items-center justify-content-between">
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    Status: {order.status}
                                </Typography>
                                <Button variant="outlined" color="error" onClick={() => handleDelete(order._id)}> Delete </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                )
            }
        </Container >
    );
};

export default MyOrders;