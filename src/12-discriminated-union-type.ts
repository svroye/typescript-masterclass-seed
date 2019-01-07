/**
 * Discriminated Union Types
 */
/**
// below are the same interfaces and starter code as in file 11-intersection-types.ts,
// but slightly modified

// order of a customer
interface Order {
    id: string;
    amount: number;
    currency: string;
}

// for payment by card
interface Stripe {
    type: 'stripe';
    card: string;
    cvc: string;
}

// payment by PayPal
interface PayPal {
    type: 'paypal';
    email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;

const order: Order = {
    id: 'xj28',
    amount: 100 ,
    currency: 'USD'
};

const orderCard : CheckoutCard = {
    ...order, 
    type: "stripe",
    card: '1000 2000 3000 4000',
    cvc: '123'
};

const orderPayPal: CheckoutPayPal = {
    ...order,
    type: "paypal",
    email: "abd@def.com"
};

// create new union type
type Payload = CheckoutCard | CheckoutPayPal;

// function used for payment. Inside it, we need to detect which type of the union
// we are dealing with. We add 1 common property to the interfaces that discriminates 
// them between each other. In above example, we added the 'type' key
function checkout(payload: Payload) {
    if (payload.type === 'stripe') {
        console.log(payload.card, payload.cvc);
    }

    if (payload.type === 'paypal') {
        console.log(payload.email);
    }
}

checkout(orderCard);
checkout(orderPayPal);
*/