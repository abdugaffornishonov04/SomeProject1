let mainRow = document.querySelector( ".wrapper" );
let viewOrder = document.querySelector( ".view-order" );
let category = document.querySelector( ".category" );
let categoryAllBtn = document.querySelectorAll( ".category button" );
let categoryBtnAlll = document.querySelector(".category-all");
let categoryBtnKids = document.querySelector(".category-bolalar");
let categoryBtnAdults = document.querySelector(".category-kattalar");


/////

function getCard() {
  productData.map( ( el ) => {
    mainRow.innerHTML += `
    <div class="product-card">
      <div class="p-c-image">
        <img src="https://picsum.photos/200/300" alt="an img">
        <p class="p-c-quantity p-c-quantity${el.id}">${el.quantity}</p>
      </div>
      <div class="p-c-nandprice">
        <h2 class="p-c-name">${el.name}</h2>
        <p class="p-c-price">${el.price}$</p>
      </div>
      <p class="p-c-desc">${el.description}</p>
      <div class="btn-wrapper">
        <button onclick="someFunction(${el.id})" class="p-c-button1 theAddBtn${el.id}">Qo'shish</button>
        <div class="p-c-button2 theInDec${el.id}">
          <button onclick="decrease(${el.id})" class="p-c-button2-span1">
            <img src="images/minus.png" alt="an img">
          </button>
          <button onclick="increase(${el.id})" class="p-c-button2-span2">
            <img src="images/plus.png" alt="an img">
          </button>
        </div>
      </div>
    </div>
  `
  } );
}

/////

getCard()

let theBtn = document.querySelectorAll( ".product-btn" );

function someFunction( id ) {

  let theAddBtn = document.querySelector( `.theAddBtn${id}` )
  theAddBtn.style.display = "none"
  let theInDec = document.querySelector( `.theInDec${id}` )
  theInDec.style.display = "flex";

  let quantityElement = document.querySelector( `.p-c-quantity${id}` );
  quantityElement.style.display = "flex";

  viewOrder.style.display = "block";
}


function decrease( id ) {
  let theData = productData.find( ( el ) => el.id == id );

  if ( theData.quantity !== 0 ) {
    theData.quantity--;
  } else {
    let theAddBtn = document.querySelector( `.theAddBtn${id}` )
    theAddBtn.style.display = "flex"
    let theInDec = document.querySelector( `.theInDec${id}` )
    theInDec.style.display = "none";
    let quantityElement = document.querySelector( `.p-c-quantity${id}` );
    quantityElement.style.display = "none"

  }

  let quantityElement = document.querySelector( `.p-c-quantity${id}` );
  if ( theData.quantity >= 1 ) {
    quantityElement.textContent = theData.quantity;
  } else {
    quantityElement.style.display = 'none';
    let theAddBtn = document.querySelector( `.theAddBtn${id}` )
    theAddBtn.style.display = "flex"
    let theInDec = document.querySelector( `.theInDec${id}` )
    theInDec.style.display = "none";
  }
  quantityElement.style.transform = "scale(1.1)";

  setTimeout( () => {
    quantityElement.style.transform = "none";
  }, 300 );
}


function increase( id ) {
  let theData = productData.find( ( el ) => el.id == id );
  theData.quantity++;

  let quantityElement = document.querySelector( `.p-c-quantity${id}` );
  quantityElement.style.display = "flex"
  quantityElement.textContent = theData.quantity;
  quantityElement.style.transform = "scale(1.1)";

  setTimeout( () => {
    quantityElement.style.transform = "none";
  }, 300 );

  // if ( theData.quantity === 2 ) {
  //   let theAddBtn = document.querySelector( `.theAddBtn${id}` )
  //   theAddBtn.style.display = "none"
  //   let theInDec = document.querySelector( `.theInDec${id}` )
  //   theInDec.style.display = "flex";
  // }
}


productData.map( ( el ) => {
  if ( el.quantity === 1 ) {
  }
} )


////// category


let activeCategory = document.querySelector( ".category button:first-child" );
activeCategory.classList.add( "activeCategory" );

categoryAllBtn.forEach( function ( button ) {
  button.addEventListener( "click", function () {
    categoryAllBtn.forEach( function ( btn ) {
      btn.classList.remove( "activeCategory" );
    } );

    button.classList.add( "activeCategory" );
    activeCategory = button;
  } );
} );

///////

categoryBtnKids.addEventListener("click", () => {
  let kidsCategory = productData.filter((el) => el.category === "Kids")
  mainRow.innerHTML = ""
    kidsCategory.map( ( el ) => {
      mainRow.innerHTML += `
    <div class="product-card">
      <div class="p-c-image">
        <img src="https://picsum.photos/200/300" alt="an img">
        <p class="p-c-quantity p-c-quantity${el.id}">${el.quantity}</p>
      </div>
      <div class="p-c-nandprice">
        <h2 class="p-c-name">${el.name}</h2>
        <p class="p-c-price">${el.price}$</p>
      </div>
      <p class="p-c-desc">${el.description}</p>
      <div class="btn-wrapper">
        <button onclick="someFunction(${el.id})" class="p-c-button1 theAddBtn${el.id}">Qo'shish</button>
        <div class="p-c-button2 theInDec${el.id}">
          <button onclick="decrease(${el.id})" class="p-c-button2-span1">
            <img src="images/minus.png" alt="an img">
          </button>
          <button onclick="increase(${el.id})" class="p-c-button2-span2">
            <img src="images/plus.png" alt="an img">
          </button>
        </div>
      </div>
    </div>
  `
    } );
  
})

categoryBtnAdults.addEventListener("click", () => {
  let adultsCategory = productData.filter((el) => el.category === "Adults")
  mainRow.innerHTML = ""
    adultsCategory.map( ( el ) => {
      mainRow.innerHTML += `
    <div class="product-card">
      <div class="p-c-image">
        <img src="https://picsum.photos/200/300" alt="an img">
        <p class="p-c-quantity p-c-quantity${el.id}">${el.quantity}</p>
      </div>
      <div class="p-c-nandprice">
        <h2 class="p-c-name">${el.name}</h2>
        <p class="p-c-price">${el.price}$</p>
      </div>
      <p class="p-c-desc">${el.description}</p>
      <div class="btn-wrapper">
        <button onclick="someFunction(${el.id})" class="p-c-button1 theAddBtn${el.id}">Qo'shish</button>
        <div class="p-c-button2 theInDec${el.id}">
          <button onclick="decrease(${el.id})" class="p-c-button2-span1">
            <img src="images/minus.png" alt="an img">
          </button>
          <button onclick="increase(${el.id})" class="p-c-button2-span2">
            <img src="images/plus.png" alt="an img">
          </button>
        </div>
      </div>
    </div>
  `
    } );
  
})

categoryBtnAlll.addEventListener( "click", () => {
  mainRow.innerHTML = ""
  productData.map( ( el ) => {
    mainRow.innerHTML += `
    <div class="product-card">
      <div class="p-c-image">
        <img src="https://picsum.photos/200/300" alt="an img">
        <p class="p-c-quantity p-c-quantity${el.id}">${el.quantity}</p>
      </div>
      <div class="p-c-nandprice">
        <h2 class="p-c-name">${el.name}</h2>
        <p class="p-c-price">${el.price}$</p>
      </div>
      <p class="p-c-desc">${el.description}</p>
      <div class="btn-wrapper">
        <button onclick="someFunction(${el.id})" class="p-c-button1 theAddBtn${el.id}">Qo'shish</button>
        <div class="p-c-button2 theInDec${el.id}">
          <button onclick="decrease(${el.id})" class="p-c-button2-span1">
            <img src="images/minus.png" alt="an img">
          </button>
          <button onclick="increase(${el.id})" class="p-c-button2-span2">
            <img src="images/plus.png" alt="an img">
          </button>
        </div>
      </div>
    </div>
  `
  } );

} )