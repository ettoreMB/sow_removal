


document.getElementById("quote-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const landSize = parseInt(document.getElementById("landSize").value);
  const result = document.getElementById("quoteResult");

  if (!name) {
    alert("Please enter a valid name.");
    return;
  }
  
  if (age < 18 ) {
    alert("Sorry, you must be at least 18 years old to request a quote.");
    return;
  }

  if (landSize === 0) {
    alert("Please enter a valid land size.");
    return;
  }

  const pricePerSqFtSnowRemoval = 20;
  const pricePerSqFtLawnMoving = 30;

  const summerDiscount = 0.2; 

  let estimatedPriceSnowRemoval = landSize * pricePerSqFtSnowRemoval;
  let estimatedPriceLawn = landSize * pricePerSqFtLawnMoving;

  result.classList.remove("hidden");
  result.innerHTML = `
      <h3>Quote Summary</h3>
      <p>Name: ${name}</p>
      <p>Age: ${age}</p>
      <p>Land Size: ${landSize} sq ft</p>
      <p>Estimated Snow removal Price: $${estimatedPriceSnowRemoval.toFixed(2)} <span>Summer disccount $${estimatedPriceSnowRemoval * summerDiscount}</span></p>
      <p>Estimated Lawn removal Price: $${estimatedPriceLawn.toFixed(2)} <span>Summer disccount $${estimatedPriceLawn * summerDiscount}</span></p>
  `;
});


const dropDownMenuButton = document.getElementById("drop-down-menu-button");

dropDownMenuButton.addEventListener("click", (event) => {
  const box = document.getElementById("drop-down-menu-box");
  box.classList.toggle("hidden");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  const box = document.getElementById("drop-down-menu-box");
  const button = document.getElementById("drop-down-menu-button");

  if (!box.contains(event.target) && !button.contains(event.target)) {
    box.classList.add("hidden");
  }
});