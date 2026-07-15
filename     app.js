const panel = document.getElementById("mainPanel");

const sineButton = document.getElementById("sineBlock");

const inchButton = document.getElementById("inchButton");

const mmButton = document.getElementById("mmButton");

let currentUnits = "IN";

inchButton.addEventListener("click", () => {

    currentUnits = "IN";

    inchButton.classList.add("active");

    mmButton.classList.remove("active");

});

mmButton.addEventListener("click", () => {

    currentUnits = "MM";

    mmButton.classList.add("active");

    inchButton.classList.remove("active");

});

sineButton.addEventListener("click", () => {

    panel.innerHTML = `

        <h2>📐 Sine Block Calculator</h2>

        <br>

        <label>Sine Bar Length</label>

        <br><br>

        <select id="barLength">

            <option>5 in</option>

            <option selected>6 in</option>

            <option>10 in</option>

            <option>200 mm</option>

            <option>250 mm</option>

        </select>

        <br><br>

        <label>Angle</label>

        <br><br>

        <input
            id="angle"
            type="number"
            placeholder="Enter angle"
            style="width:100%;padding:12px;border-radius:12px;border:none;background:#2b2b2b;color:white;"
        >

        <br><br>

        <button
            id="calculate"
            style="
            width:100%;
            padding:16px;
            background:#ff7a00;
            border:none;
            color:white;
            font-size:18px;
            border-radius:18px;
            ">
            Calculate
        </button>

        <br><br>

        <div id="result">

            Waiting for calculation...

        </div>

    `;

    document.getElementById("calculate").onclick = function () {

        const angle =
            parseFloat(document.getElementById("angle").value);

        if (isNaN(angle)) {

            alert("Enter an angle.");

            return;

        }

        let length = 6;

        const selection =
            document.getElementById("barLength").value;

        if (selection === "5 in") length = 5;
        if (selection === "6 in") length = 6;
        if (selection === "10 in") length = 10;
        if (selection === "200 mm") length = 200;
        if (selection === "250 mm") length = 250;

        const stack =
            Math.sin(angle * Math.PI / 180) * length;

        document.getElementById("result").innerHTML =

            "<h3>Gauge Block Stack</h3><br><strong>" +

            stack.toFixed(4) +

            (currentUnits === "IN" ? " in" : " mm") +

            "</strong>";

    };

});