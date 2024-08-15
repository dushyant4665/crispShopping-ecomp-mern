import axios from 'axios'

export async function productsData(){
    const product = await axios.get('https://fakestoreapiserver.reactbd.com/amazonproducts');
    return product;

    }
    // fetch('')
    // .then(res => res.json())
    // .then(console.log);