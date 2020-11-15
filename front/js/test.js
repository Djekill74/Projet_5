const contactOne = {
    firstName:'dupont',
    secondName: 'jacques',
    address: '2 rue des champs',
    city:'morzine',
    email:'jacquod@yahoo.fr'
};
const productId = {
    id:'5be9c8541c9d440000665243'
};
const transmisible ={
    contact: contactOne,
    product: productId
}

const myInit ={ method: 'post',
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(transmisible)   
}


console.log(myInit);
postItem();
