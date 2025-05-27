const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/pay', async (req, res) => {
    try {
        const { amount, token, email, items } = req.body;

        if (!amount || !token) {
            return res.status(400).json({ 
                success: false, 
                message: 'Amount and token are required' 
            });
        }

        // Create a charge
        const charge = await stripe.charges.create({
            amount: amount,
            currency: 'usd',
            source: token.id,
            description: `Payment for ${email}`,
            metadata: {
                email: email,
                items: JSON.stringify(items)
            }
        });

        res.status(200).json({
            success: true,
            message: 'Payment successful',
            charge: charge
        });
    } catch (error) {
        console.error('Payment error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Payment failed'
        });
    }
});

module.exports = router; 