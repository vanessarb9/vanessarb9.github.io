// Cargar el JSON de los productos y mostrar en la página
window.onload = function() {
    fetch('JSON_ejemplo.json')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <strong>$${product.price.toFixed(2)}</strong>
                `;

                productList.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
};
