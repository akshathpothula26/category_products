let products={};
document.getElementById('menBtn').addEventListener('click', function() {
    
    displayButton("menBtn");
    generateHTMLCards(products["categories"].find(x=>x.category_name=='Men').category_products);
   

    
  });
  
  document.getElementById('womenBtn').addEventListener('click', function() {
    
    displayButton("womenBtn");
    generateHTMLCards(products["categories"].find(x=>x.category_name=='Women').category_products);



  });
  
  document.getElementById('kidsBtn').addEventListener('click', function() {
    
    displayButton("kidsBtn");
    generateHTMLCards(products["categories"].find(x=>x.category_name=='Kids').category_products);


  });
  

  function onLoad(){
    let activeTab=`menBtn`;
    products=getData('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
    console.log(products);
    
    
    document.getElementById('menBtn').classList.add("active-button");

  }
  function displayButton(buttonId){
    document.getElementById('menBtn').classList.remove("active-button");
    document.getElementById('womenBtn').classList.remove("active-button");
    document.getElementById('kidsBtn').classList.remove("active-button");
  
    
    document.getElementById(buttonId).classList.add("active-button");
  }


async function getData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		
       generateHTMLCards(data["categories"].find(x=>x.category_name=='Men').category_products);
		products=data;
       return data;
	} catch (error) {
		console.error('Fetching data failed:', error);
		throw error;
	}
} 
function generateHTMLCards(products) {
    let html = '';

    
        products.forEach(product => {
            html +=  `<div class="card "  >
            <div >
            

            <div class="image-container">
            <img  id="image" src="${product.image}" alt="Avatar" style="width:100%  ">
            <div class="overlay-text"><h2 > ${product.badge_text ? `<span class="badge">${product.badge_text}</span>` : ''}</h2></div>
            </div>
        </div>
            <div >
            
                <p class="inline heading2"  >${product.title} </p>
                <p class="inline small_para" id="vendor" >  ${product.vendor}</p>
             
            </div>
              <div>
                <p class="inline rate_para" >Rs.${product.price} </p>
                <p class="inline discount_para" >${product.compare_at_price}</p>
                <p class="inline off_para" >50% Off</p>
    
              </div>
              <div class="cart_button">
              <button class="button2">Add to cart</button>
            </div>
        </div>`
            
        });
        document.getElementById("products").innerHTML=html;
    

    return html;
}

