import { Grid, Container, Paper, Typography, Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from '../../Hooks/useAuth';

const ManageOrders = () => {
    const { user } = useAuth()
    const email = user.email;
    const [clicked, setClicked] = useState('')
    const [ordersLoading, setOrdersLoading] = useState(true);

    //FETCH ORDERS DATA
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('https://mysterious-ridge-83702.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
                setOrdersLoading(false)
            })

    }, [clicked])

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
                        const remainingOrders = allOrders.filter(order => order._id !== id)
                        setAllOrders(remainingOrders)
                    }
                })
        }
    }

    //Update Order Status
    const handleOrderStatus = (id) => {
        fetch(`https://mysterious-ridge-83702.herokuapp.com/orders/update/${id}`, {
            method: 'GET'
        })
            .then(res => setClicked(id))
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
                Manage all Orders
            </Typography>
            {
                allOrders.map(order =>
                    <Card variant="outlined" sx={{ mb: 1 }} key={order._id}>
                        <Grid container columns={{ xs: 6, md: 12 }} sx={{ p: 2 }}>
                            <Grid item xs={6} md={6}>
                                <Typography variant="h6" component="div">
                                    {order.title}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {order.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={2} className="d-flex align-items-center justify-content-between">
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    Status: {order.status}
                                </Typography>
                            </Grid>
                            <Grid xs={6} md={4} className="d-flex align-items-center justify-content-end">
                                {
                                    (order.status !== "Shipped") ? <Button variant="contained" sx={{ mr: 1 }} onClick={() => handleOrderStatus(order._id)}> Ship </Button> :
                                        <Button variant="contained" sx={{ mr: 1 }} disabled >Shipped</Button>
                                }


                                <Button variant="outlined" color="error" onClick={() => handleDelete(order._id)}> Delete </Button>
                            </Grid>


                        </Grid>
                    </Card>
                )
            }
        </Container >
    );
};

export default ManageOrders;