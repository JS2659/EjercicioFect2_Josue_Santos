fetch("https://api.escuelajs.co/api/v1/categories")
    .then(response => response.json())
    .then(data => {
        let datos = ``

        for(let categoria of data){
            datos += `
             <li class="list-group-item">
              <div class="card" style="width: 18rem;">
                <img src="${categoria.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${categoria.name}</p>
                </div>
                </div>
             </li>           
            `
        }
        document.getElementById("lista").innerHTML = datos
    })