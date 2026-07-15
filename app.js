// =========================
// LG WORX v1.0 Foundation
// =========================

const panel = document.getElementById("mainPanel");

const inchButton = document.getElementById("inchButton");
const mmButton = document.getElementById("mmButton");

let units = "IN";

// -------------------------
// Unit Toggle
// -------------------------

inchButton.onclick = () => {

    units = "IN";

    inchButton.classList.add("active");
    mmButton.classList.remove("active");

};

mmButton.onclick = () => {

    units = "MM";

    mmButton.classList.add("active");
    inchButton.classList.remove("active");

};

// -------------------------
// Tool Buttons
// -------------------------

document.getElementById("sineBlock").onclick = showSineBlock;

// -------------------------
// Sine Block Screen
// -------------------------

function showSineBlock(){

panel.innerHTML = `

<div class="card">

<h2 class="cardTitle">

📐 Sine Block Calculator

</h2>

<label>

Sine Bar Length

</label>

<select id="barLength">

<option value="5">5 inch</option>

<option value="6" selected>6 inch</option>

<option value="10">10 inch</option>

</select>

<label>

Angle (${units})

</label>

<input

id="angle"

type="number"

step="0.001"

placeholder="Enter Angle"

>

<button

class="orangeButton"

id="calculate">

Calculate

</button>

<div

id="result"

class="result">

Waiting...

</div>

</div>

`;

document
.getElementById("calculate")
.onclick = calculateSineBlock;

}

// -------------------------
// Calculate
// -------------------------

function calculateSineBlock(){

const angle =
parseFloat(
document.getElementById("angle").value
);

if(isNaN(angle)){

alert("Enter an angle.");

return;

}

const length =
parseFloat(
document.getElementById("barLength").value
);

const stack =
Math.sin(angle*Math.PI/180)*length;

document.getElementById("result").innerHTML =

`
Gauge Block Height

<br><br>

<b>

${stack.toFixed(4)}

${units}

</b>

`;

}
// =========================
// Bottom Navigation
// =========================

const homeNav = document.getElementById("homeNav");
const favoritesNav = document.getElementById("favoritesNav");
const settingsNav = document.getElementById("settingsNav");

function setActiveNav(button){

    document.querySelectorAll(".navButton")
        .forEach(btn => btn.classList.remove("activeNav"));

    button.classList.add("activeNav");

}

homeNav.onclick = () => {

    setActiveNav(homeNav);

};

favoritesNav.onclick = () => {

    setActiveNav(favoritesNav);

    panel.innerHTML = `
        <div class="card">
            <h2 class="cardTitle">Favorites</h2>
            <p>Your favorite tools will appear here.</p>
        </div>
    `;

};

settingsNav.onclick = () => {

    setActiveNav(settingsNav);

    panel.innerHTML = `
        <div class="card">
            <h2 class="cardTitle">Settings</h2>
            <p>More options are coming soon.</p>
        </div>
    `;

};