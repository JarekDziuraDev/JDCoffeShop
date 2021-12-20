var addToCartForm = document.querySelector("#addToCartForm");

addToCartForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = {
        'items': [
            {
                'id': document.getElementById("itemId").value,
                'quantity': 1
            }
        ]
    };
    console.log(formData);
    
    fetch('/cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then( (resp) => resp.json())
    .catch( (err) => {
        console.log('ERROR: ' + err );
    })
})