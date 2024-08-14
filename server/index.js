const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
require('dotenv').config();
const port = process.env.port || 8000
const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


app.get('/',(req,res,next)=>{
    next()
    res.send('hello world');
})



app.post('/pay',async(req,res)=>{
    console.log(req.body.token);
    await Stripe.charges.create({
        source:req.body.token.id,
        amount:req.body.amount,
        currency:'usd',
    })
})

app.listen(8000,()=>{
    console.log(`server is running on port ${8000}`);
});
