import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Styles'


const Cart = ({cart}) => {
    const classes = useStyles()

    const Emptycart =()=> {
        <Typography variant='subtitle1'>Empty Cart !</Typography>
    };

    const FilledCart = () => {
        <>
                <Grid container spacing={3}>
                    {
                        cart.line_items.map((item) => (
                            <Grid item xs={12} sm={4} key={item.id}>
                                <div> {item.name} </div>
                            </Grid>
                        ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        Subtotal : {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div className={classes.emptyButton} size='large' type="button" variant='contained' color='secondary'>Empty Cart</div>
                    <div className={classes.checkoutButton} size='large' type="button" variant='contained' color='primary'>Checkout     </div>
                </div>
        </>
    }

    return (

        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant='h3'>
                Your Cart
            </Typography>
            { !cart.line_items.length ? <Emptycart /> : <FilledCart />}
        </Container>
    );
};

export default Cart;