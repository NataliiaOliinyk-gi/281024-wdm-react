import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
// import { Typography, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";

import CartItem from './CartItem/CartItem';

import { selectCart } from '../../redux/cart/cart-selectors';

const Cart = ()=> {
    const items = useSelector(selectCart);

    const elements = items.map(item => <CartItem key={item.id} {...item} />);

    return (
        <Box>
            <Typography variant='h5' gutterBottom>Cart</Typography>
            <Paper sx={{padding: "15px"}}>
                {elements}
            </Paper>
        </Box>
    )
};

export default Cart;