<!DOCTYPE html>
<html>
    <head>
        <script src="download.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <title>Gurka The Game</title>
        <link rel="shortcut icon" href="gurka.png">
        
    </head>
    <body>
        <h2 id="nametext">Loading...</h2>
        <img id="gurka" src="gurka.png" width="300" height="300" onclick="Click()" style="transform:rotate(0deg)">
        <h3 id="gurkortext">Gurkor: 0</h3>
        <h3 id="ranktext">Rank: Loading...</h3>
        <button onclick="Save()">Save</button>
        <button onclick="Load()">Load</button>
        <button onclick="Rebirth()">Rebirth</button>
        <h1>Settings</h1>
        <h4>Factory Name:</h4>
        <input type="text" placeholder="Type your gurka factory name." id="nameinput">
        <h4>Autosave:</h4>
        <input type="checkbox" id="autosbox">
        <h4>Autobuy:</h4>
        <input type="checkbox" id="autobbox">
        <h4>Background Image:</h4>
        <input type="text" placeholder="Type image url." id="backgroundinput">
        <h4>Trello:</h4>
        <button onclick="window.open('https://trello.com/b/HVKqSnGD/gurka-the-game')">Click me to open trello page</button>
        <h1>Skin Shop</h1>
        <button onclick="Buy(0)">Buy Deafult Skin for free</button>
        <button onclick="Buy(1)">Buy Color Inverted Deafult Skin for 250 Gurkor</button>
        <button onclick="Buy(2)">Buy Uh Oh Stinky Skin for 500 Gurkor</button>
        <button onclick="Buy(3)">Buy Donald Trump Skin for 1000 Gurkor</button>
        <button onclick="Buy(4)">Buy Kung Gurka Skin for 3000 Gurkor</button>
        <button onclick="Buy(5)">Buy Thanos Skin for 8000 Gurkor</button>
        <button onclick="Buy(6)">Buy Coin Skin for 5000 Gurkor</button>
        <button onclick="Buy(7)">Buy Apple Skin for 2000 Gurkor</button>
        <button onclick="Buy(8)">Buy Pancake Skin for 20000 Gurkor</button>
        <button onclick="Buy(9)">Buy Gucci Gurka Skin for 100000 Gurkor</button>
        <button onclick="Buy(10)">Buy Laptop Skin for 3000 Gurkor</button>
        <button onclick="Buy(11)">Buy Corona Skin for 70000 Gurkor</button>
        <button onclick="Buy(12)">Buy Roblox Noob Skin for 90000 Gurkor</button>
        <button onclick="Buy(13)">Buy Cake Skin for 500000 Gurkor</button>
        <button onclick="Buy(14)">Buy Minecraft Grass Block Skin for 300000 Gurkor</button>
        <button onclick="Buy(15)">Buy Banana Skin for 8000000 Gurkor</button>
        <button onclick="Buy(16)">Buy Meatball Skin for 90000000 Gurkor</button>
        <button onclick="Buy(17)">Buy Croissant Skin for 100000000 Gurkor</button>
        <button onclick="Buy(18)">Buy Milk Skin for 300000 Gurkor</button>
        <button onclick="Buy(19)">Buy Fortnite Skin for 50000 Gurkor</button>
        <button onclick="Buy(20)">Buy Thick Steve Skin for 9000000000000 Gurkor</button>
        <button onclick="Buy(21)">Buy Chicken Nugget Skin for 900000000000000 Gurkor</button>
        <button onclick="Buy(22)">Buy Turtle Skin for 90000000000 Gurkor</button>
        <button onclick="Buy(23)">Buy Sol Skin for 9000000 Gurkor</button>
        <h1>Upgrades Shop</h1>
        <button onclick="Upgrade10()" id="upgrade10btn">Buy 10 AutoClickers</button>
        <button onclick="Upgrade()" id="upgradebtn">Buy 1 AutoClicker for 50 Gurkor</button>
        <h4 id="upgradepricetxt"></h4>
        <script src="main.js"></script>
        <h1>File Saving</h1>
        <button onclick="SaveFile()">Save to file</button>
        <button onclick="LoadFile()">Load file</button>
        <input type="file" name="inputfile" id="inputfile" accept=".save">
        <h1>Highscore</h1>
        <h4 id="highscoretext">Loading...</h4>
        <button onclick="LoadHighscore()">Refresh</button>
        <button onclick="SaveHighscore(prompt('Type your name or nickname'),gurkor)">Validate</button>
        <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-database.js"></script>
        <script>
          var firebaseConfig = {
            apiKey: "AIzaSyBmnT4KaojmVZ7cxUa48GoHCwPm1rW0X7I",
            authDomain: "gurkathegame.firebaseapp.com",
            databaseURL: "https://gurkathegame.firebaseio.com",
            projectId: "gurkathegame",
            storageBucket: "gurkathegame.appspot.com",
            messagingSenderId: "1026178212329",
            appId: "1:1026178212329:web:b6609e969695a85aea2b78"
          };
          firebase.initializeApp(firebaseConfig);
          function SaveHighscore(nameinput,gurkorinput) {
            if (nameinput != "") {
                var username = ""
                var highscore = 0
                return firebase.database().ref("saved_highscore").once('value').then(function(snapshot) {
                    username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
                    highscore = (snapshot.val() && snapshot.val().highscore) || 'Anonymous';
                    if (gurkor > highscore) {
                        var saveObject = {
                            name: nameinput,
                            highscore: gurkorinput.toString(),
                            rebirths: document.getElementById("ranktext").innerHTML
                        }
                        firebase.database().ref("saved_highscore").set(saveObject)
                        alert("Highscore saved!")
                        LoadHighscore()
                    } else {
                        alert("You dont have enough gurkor!")
                    }
                });
            } else {
                alert("You did not type your name/nickname! No data has been saved!")
            }
        }
        function LoadHighscore() {
            var username = ""
            var highscore = 0
            var reb = 0
            return firebase.database().ref("saved_highscore").once('value').then(function(snapshot) {
                username = (snapshot.val() && snapshot.val().name) || 'Not found!';
                highscore = (snapshot.val() && snapshot.val().highscore) || 'Not found!';
                reb = (snapshot.val() && snapshot.val().rebirths) || 'Not found!';
                document.getElementById("highscoretext").innerHTML = "Name: " + username + ", Highscore: " + parseInt(highscore) + " Gurkor, Rank: " + reb
            });
        }
        LoadHighscore()
        </script>
    </body>
</html>
