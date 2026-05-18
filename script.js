const favoriteCount = document.getElementById("favoriteCount");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const cartCount = document.getElementById("cartCount");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const carsContainer = document.getElementById("carsContainer");

const showFavoritesBtn = document.getElementById("showFavoritesBtn");
showFavoritesBtn.addEventListener("click", showFavorites);

const showCartBtn = document.getElementById("showCartBtn");
showCartBtn.addEventListener("click", showCart);

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", getCars);

// Load car brands
async function getCars() {
  try {
    const response = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
    );

    const data = await response.json();

    carsContainer.innerHTML = "";

    data.Results.slice(0, 20).forEach((car) => {
      const div = document.createElement("div");

      div.innerHTML = `
        <div style="
          border:1px solid #ccc;
          padding:15px;
          margin:10px;
          border-radius:10px;
          width:250px;
          box-shadow:0 2px 8px rgba(0,0,0,0.1);
        ">
          <h2>${car.MakeName}</h2>

        <button
  class="show-btn"
  onclick="getModels(${car.MakeId}, '${car.MakeName}')"
>
  Show Models
</button>
        </div>
      `;

      carsContainer.appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }
}
const PEXELS_API_KEY =
  "cD0CA8r3xfCGbe4jaAQYkkSGtxu159dB9iQRddViHLHNQdOzjkOL1SNG";
// Load models + car images
async function getModels(makeId, makeName) {
  try {
    carsContainer.innerHTML = `<h2>Loading...</h2>`;

    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${makeId}?format=json`,
    );

    const data = await response.json();

    carsContainer.innerHTML = "";

    const models = data.Results.slice(0, 12);

    for (const model of models) {
      const modelName = model.Model_Name;

      let imageUrl =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

      // FETCH IMAGE FROM PEXELS
      try {
        const imageResponse = await fetch(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(
            makeName + " " + modelName + " car",
          )}&per_page=1`,
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          },
        );

        const imageData = await imageResponse.json();

        if (imageData.photos?.length > 0) {
          imageUrl = imageData.photos[0].src.medium;
        }
      } catch (error) {
        console.log(error);
      }

      const div = document.createElement("div");

      div.innerHTML = `
    <div style="
      border:1px solid #ddd;
      padding:15px;
      margin:10px;
      border-radius:10px;
      width:250px;
    ">
      <img
        src="${imageUrl}"
        alt="${modelName}"
        width="220"
        height="140"
        style="
          object-fit:cover;
          border-radius:8px;
        "
      />

     <div style="
  display:flex;
  justify-content:space-between;
  align-items:center;
">
  <h3>${modelName}</h3>

  <button class="favorite-btn">
    ❤️
  </button>
</div>

<button class="buy-btn">
  Buy
</button>
  `;

      const favoriteButton = div.querySelector(".favorite-btn");

      favoriteButton.onclick = (e) => {
        const carData = {
          model: modelName,
          image: imageUrl,
          brand: makeName,
          MakeId: makeId,
        };

        flyToCart(e.target); // ❤️ האנימציה
        addToFavorites(carData);
      };

      const buyButton = div.querySelector(".buy-btn");

      buyButton.onclick = () => {
        const carData = {
          model: modelName,
          image: imageUrl,
          brand: makeName,
          MakeId: makeId,
        };

        addToCart(carData);
      };

      carsContainer.appendChild(div);
    }
  } catch (error) {
    console.log(error);
  }
}
// Start app
getCars();

function addToFavorites(car) {
  const carToSave = {
    id: `${car.MakeId}-${car.model}`,
    model: car.model,
    image: car.image,
    brand: car.brand,
    MakeId: car.MakeId,
  };

  const exists = favorites.find((item) => item.id === carToSave.id);

  if (exists) return;

  favorites.push(carToSave);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  updateFavoriteCount();
}

function addToCart(car) {
  const carToSave = {
    id: `${car.MakeId}-${car.model}`,
    model: car.model,
    image: car.image,
    brand: car.brand,
    MakeId: car.MakeId,
  };

  const exists = cart.find((item) => item.id === carToSave.id);

  if (exists) return;

  cart.push(carToSave);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  const cards = document.querySelectorAll(".car-card, .car-card-main");

  cards.forEach((card) => {
    if (card.innerText.includes(car.model)) {
      card.classList.add("card-added");

      setTimeout(() => {
        card.classList.remove("card-added");
      }, 300);
    }
  });

  // 🔔 הודעה קטנה
  showToast("נוסף לעגלה 🛒");

  function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");
    }, 10);

    setTimeout(() => {
      toast.remove();
    }, 2000);
  }
}

function flyToCart(startElement) {
  const heart = document.createElement("div");
  heart.classList.add("flying-heart");
  heart.innerText = "❤️";

  document.body.appendChild(heart);

  const startRect = startElement.getBoundingClientRect();
  const cartBtn = document.getElementById("showCartBtn");
  const cartRect = cartBtn.getBoundingClientRect();

  // מיקום התחלה
  heart.style.left = startRect.left + "px";
  heart.style.top = startRect.top + "px";

  // נותנים רגע לציור ואז מזיזים לעגלה
  setTimeout(() => {
    heart.style.left = cartRect.left + "px";
    heart.style.top = cartRect.top + "px";
    heart.style.opacity = "0";
    heart.style.transform = "scale(0.3)";
  }, 50);

  // מחיקה בסוף
  setTimeout(() => {
    heart.remove();
  }, 900);
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
}

function updateFavoriteCount() {
  favoriteCount.textContent = favorites.length;
}

updateFavoriteCount();

function showFavorites() {
  carsContainer.innerHTML = "";

  favorites.forEach((car) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div style="
        border:1px solid #ddd;
        padding:15px;
        margin:10px;
        border-radius:10px;
        width:250px;
      ">
        <img
          src="${car.image}"
          alt="${car.model}"
          width="220"
          height="140"
          style="
            object-fit:cover;
            border-radius:8px;
          "
        />

        <h3>${car.model}</h3>

        <p>${car.brand}</p>

       <button class="buy-btn">
         Buy
       </button>

       <button class="remove-btn">
         Remove
       </button>
      </div>
    `;

    const removeBtn = div.querySelector(".remove-btn");

    removeBtn.onclick = () => {
      removeFavorite(car.id);
    };
    const buyBtn = div.querySelector(".buy-btn");

    buyBtn.onclick = () => {
      const carData = {
        model: car.model,
        image: car.image,
        brand: car.brand,
        MakeId: car.MakeId,
      };

      addToCart(carData);
    };
    carsContainer.appendChild(div);
  });
}

function removeFavorite(id) {
  favorites = favorites.filter((car) => car.id !== id);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  updateFavoriteCount();
  showFavorites();
}

function updateCartCount() {
  cartCount.textContent = cart.length;
}
updateCartCount();

function showCart() {
  carsContainer.innerHTML = "";

  cart.forEach((car) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div style="
        border:1px solid #ddd;
        padding:15px;
        margin:10px;
        border-radius:10px;
        width:250px;
      ">
        <img
          src="${car.image}"
          alt="${car.model}"
          width="220"
          height="140"
          style="
            object-fit:cover;
            border-radius:8px;
          "
        />

        <h3>${car.model}</h3>

        <p>${car.brand}</p>

        <button class="remove-cart-btn">
          Remove
        </button>
      </div>
    `;

    const removeBtn = div.querySelector(".remove-cart-btn");

    removeBtn.onclick = () => {
      removeFromCart(car.id);

      showCart();
    };

    carsContainer.appendChild(div);
  });
}
