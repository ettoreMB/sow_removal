// document.getElementById("quoteForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value;
//   const age = parseInt(document.getElementById("age").value);
//   const landSize = parseInt(document.getElementById("landSize").value);
//   const result = document.getElementById("quoteResult");

//   if (age < 18) {
//       result.innerHTML = `<p>Sorry, you must be at least 18 years old to request a quote.</p>`;
//       return;
//   }

//   const pricePerSqFt = 0.1;
//   const discount = 0.2; // 20% discount for summer
//   let estimatedPrice = landSize * pricePerSqFt;
//   estimatedPrice -= estimatedPrice * discount;

//   result.innerHTML = `
//       <h3>Quote Summary</h3>
//       <p>Name: ${name}</p>
//       <p>Age: ${age}</p>
//       <p>Land Size: ${landSize} sq ft</p>
//       <p>Estimated Price: $${estimatedPrice.toFixed(2)}</p>
//   `;
// });


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