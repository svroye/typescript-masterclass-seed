/**
 * Intersection types
 */

 /**
// allows us to combine multiple types together

// order of a customer
interface Order {
    id: string;
    amount: number;
    currency: string;
}

// for payment by card
interface Stripe {
    card: string;
    cvc: string;
}

// payment by PayPal
interface PayPal {
    email: string;
}

// an order either is payed by card or by PayPal.
// create intersection type of Order and Stripe by defining a type 
// and using the '&'. It is equivalent to extending both interface 
// with Order, but keeps code more modular
type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;

// doesn't need to be two pre-defined interfaces
type CheckoutAbc = Order & {name: string};


const order: Order = {
    id: 'xj28',
    amount: 100 ,
    currency: 'USD'
};

// you can create objects of the intersection type
const orderCard : CheckoutCard = {
    ...order, 
    card: '1000 2000 3000 4000',
    cvc: '123'
};

const orderPayPal: CheckoutPayPal = {
    ...order,
    email: "abd@def.com"
};
 */