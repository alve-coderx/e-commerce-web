import { Grid } from '@mui/material';
import React from 'react';
import Product from './Product';
import useStyles from './StylesProduct'
const Products = ({products,handleCart}) => {
    const classes = useStyles();
   
    return (
        <main className={classes.content}>
           <div className={classes.toolbar}>
            <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} handleCart={handleCart}/>
                    </Grid>
                    ))}
                </Grid>
           </div>
        </main>
    );
};

export default Products;