# lg-worx
Professional machining tools for CNC machinists
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LG WORX</title>

    <link rel="stylesheet" href="style.css">
    <link rel="manifest" href="manifest.json">
</head>

<body>

<header class="header">

    <div class="logo">

        <div class="logo-box">
            LG
        </div>

        <div>

            <h1>LG WORX</h1>

            <p>Professional Machining Tools</p>

        </div>

    </div>

    <div class="units">

        <button id="inchButton" class="active">
            IN
        </button>

        <button id="mmButton">
            MM
        </button>

    </div>

</header>

<section class="quick">

    <input
        id="quickSearch"
        type="text"
        placeholder="Quick Calculate (Coming Soon)"
    >

</section>

<main class="toolGrid">

    <button class="toolCard" id="sineBlock">

        📐

        <span>Sine Block</span>

    </button>

    <button class="toolCard">

        📏

        <span>Triangle Solver</span>

    </button>

    <button class="toolCard">

        🔩

        <span>Bolt Circle</span>

    </button>

    <button class="toolCard">

        🕳️

        <span>Drill & Tap</span>

    </button>

    <button class="toolCard">

        ⚙️

        <span>G Code</span>

    </button>

    <button class="toolCard">

        📊

        <span>Converter</span>

    </button>

</main>

<section id="content">

    <h2>Welcome to LG WORX</h2>

    <p>

        Tap any tool to begin.

    </p>

</section>

<script src="app.js"></script>

</body>
</html>
