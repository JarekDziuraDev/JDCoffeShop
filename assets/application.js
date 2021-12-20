
const itemSlide = document.getElementsByClassName("carousel-cell");

for (let item of itemSlide ) {
    const addToCartForm = item.querySelector('#addToCartForm');

    const id = addToCartForm.children[0].value;

    addToCartForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let formData = {
                'items': [
                    {
                        'id': id,
                        'quantity': 1
                    }
                ]
            };
            
            fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then( (resp) => { 
                return resp.json(); 
            })
            .then( (resp) => {
                update_cart();
            })
            .catch( (err) => {
                console.log('ERROR: ' + err );
            })
    })
}

// const addToCartForm = document.getElementById('addToCartForm')

document.addEventListener('DOMContentLoaded', () => {
    update_cart();
})

function update_cart() {
    fetch('/cart.js')
    .then( (resp) => resp.json())
    .then( (data) => document.getElementById("numberOfCartItems").innerHTML = data.items.length)
    .catch( (err) => console.log(err))
}