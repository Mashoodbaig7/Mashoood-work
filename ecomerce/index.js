const divTag = document.getElementById("counts");

fetch('https://dummyjson.com/products/search?q=phone')
  .then(res => res.json())
  .then(data => {
    if (data.products && Array.isArray(data.products)) {
      data.products.forEach(item => {
        divTag.innerHTML += `
          <div class="card">
            <img src="${item.thumbnail}" alt="${item.title}" />
            <p>${item.title}</p>
            <span>Rs.${item.price}
          </div>`;
      });
    } else {
      console.error('No products found or invalid data structure');
    }
  })
  .catch(error => console.error('Error fetching data:', error));
