import { AddShoppingCart } from '@mui/icons-material';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import './Styles.css'
const Product = ({product,handleCart}) => {
    return (
        <Card className="root">
            <CardMedia className="media" image={product.image.url} title={product.name} />
            <CardContent>
            <div className="cardContent">
                <Typography gutterBottom variant="h5" component="h2">
                {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                ${product.price.formatted}
                </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className="cardActions">
            <IconButton aria-label="Add to Cart" onClick={() => handleCart(product.id,1)}>
                <AddShoppingCart />
            </IconButton>
            </CardActions>
      </Card>
    );
};

export default Product;