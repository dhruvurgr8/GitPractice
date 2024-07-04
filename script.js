const container = document.querySelector(".container");
const obj = {name:"dhruv",
    additional:{
        age:23
    }
};
const obj2 = {...obj};
obj2.additional.age =20;
console.log(obj)
        async function fetchData() {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            return data;
        }

        fetchData().then(data => {
            console.log(data)
            data.map((product) => {
                const parentDiv = document.createElement("div");
                parentDiv.className = 'product-card';

                const title = document.createElement("h3");
                title.textContent = product.title; 

                const image = document.createElement("img");
                image.className = "image";
                image.src = product.image;
                image.alt = product.title;

                

                const price = document.createElement("p");
                price.className = 'price';
                price.textContent = `$${product.price}`;

                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "delete";
                deleteBtn.className = "delete-btn";
                
                parentDiv.appendChild(deleteBtn);
                parentDiv.appendChild(image);
                parentDiv.appendChild(title);
                parentDiv.appendChild(price);
                container.appendChild(parentDiv);
                deleteBtn.addEventListener("click", ()=>{
                    deleteProduct(product.id)
                });

            });
        }).catch(error => console.error('Error:', error));

    

  async function deleteProduct(id){
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    console.log(product);
   }