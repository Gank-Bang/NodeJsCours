import axios from "axios"

const getProducts = () => {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3000/products')
                .then((response) => {
                    console.log(response.data)
                });

        });
    }, 1000)
}

const addProduct = (name, quantity) => {
    setTimeout(() => {
        axios.post('http://localhost:3000/products', {
            name: name,
            quantity: quantity
        })
            .then((response) => {
                console.log(response.data)
                return response
            }, (error) => {
                console.log("Problème dans l'ajout de votre fruit")
                return error;
            });
    }, 2000)
}


const getProductsAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            axios.get('http://localhost:3000/products')
                .then((response) => {
                    resolve(response.data);
                });
        }, 3000);
    });
}

// APPEL DES FONCTIONS EN RECURSIVES //
(async () => {
    getProducts();
    addProduct("fruit du dragon", 1);

    // RECUPERATION DU NOUVEAU TABLEAU EN ASYNCRONE// 
    const res = await getProductsAsync();
    // AFFICHAGE DU TABLEAU MIS A JOUR //
    console.log(res)
})();