function fyShuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

var clicked = [[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false]];
var bingo_strings = [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]];

function startup(){
    if (localStorage.hasOwnProperty("pats")) {    
        if (localStorage.hasOwnProperty("clicked")) {
            clicked = JSON.parse(localStorage.getItem("clicked"));
        }
        if (localStorage.hasOwnProperty("bingo_strings")) {
            bingo_strings = JSON.parse(localStorage.getItem("bingo_strings"));
        } else {
            create_board(false); //TODO: need to prompt for team here
        }
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                let current_square = document.getElementById("square"+i.toString()+j.toString());
                if (clicked[i][j]) {
                    // document.getElementById("square"+i.toString()+j.toString()).className = "square active";
                    current_square.className = "square active";
                }
                current_square.innerHTML = bingo_strings[i][j]
            }
        }
        console.log("here");
        if (localStorage.getItem("pats") == "true") {
            console.log("here2");
            let sheets = document.getElementById("style");
            sheets.href = "patriots.css";
        } else {
            console.log("here3");
            let sheets = document.getElementById("style");
            sheets.href = "seahawks.css";
        }
    }
    
}

function select_pats() {
    document.getElementById('introPopUp').style.top='120%';
    localStorage.setItem("pats", "true");
    create_board(true);
}

function select_sea() {
    document.getElementById('introPopUp').style.top='120%';
    localStorage.setItem("pats", "false");
    create_board(false);
}

function create_board(root_for_pats) {
    // TODO: this is a test for now, update eventually with better/more sophisticated list, better formatting
    var bingo_task_list = [
    "Challenge flag",
    "Defense/special teams touchdown",
    "Blocked punt/kick",
    "40+ yd reception",
    "40+ yd rush",
    "One non-QB scores multiple touchdowns",
    "A player other than a starting QB throws a pass",
    "Overtime",
    "Multiple penalties in one play",
    "Missed field goal or extra point",
    "2pt conversion attempt",
    "Jesus advertisement",
    "Political advertisement",
    "Truck advertisement",
    "AI advertisement",
    "Coca Cola advertisement",
    "Dog in an advertisement ",
    "Olympics advertisement",
    "Broadcast shows clip of super bowl XLIX",
    "Partygoer gets text from family member confused by halftime show",
    "Camera operator gets a shoutout",
    "Surprise guest at halftime show",
    "2 part ad with setup and punchline minutes apart",
    "Six seven joke",
    "Broadcast shows shot of Boston skyline",
    "Bad Bunny adds or removes a piece of clothing on camera",
    "Puerto Rican flag more than 10ft across",
    "Commentator makes ill-advised attempt at singing a bad bunny song",
    "Back-to-back gambling ads",
    "Fan with 100% of their visible skin painted",
    "Non-player on sideline knocked over by player",
    "Mic'd up player or coach curses",
    "Full-screen infographic about Patriots Super Bowl appearances",
    "Unplanned game delay of more than ten minutes",
    "Non-human animal spotted on field"
    ];
    var bingo_strings = [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]];
    fyShuffle(bingo_task_list);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if ((i == 2) && (j == 2)){
                if (root_for_pats) {bingo_strings[i][j] = "Patriots win"} else {bingo_strings[i][j] = "Seahawks win"}
            } else {
                bingo_strings[i][j] = bingo_task_list.pop(); 
            }
            // document.getElementById("square"+i.toString()+j.toString()).innerHTML = bingo_strings[i][j];
        }
    }
    localStorage.setItem("bingo_strings", JSON.stringify(bingo_strings));
    startup();
    return
}

function square_clicked(a, b) {
    if (document.getElementById("square"+a.toString()+b.toString()).className == "square active"){
        document.getElementById("square"+a.toString()+b.toString()).className = "square inactive";
    } else {
        document.getElementById("square"+a.toString()+b.toString()).className = "square active";
    }
    clicked[a][b] = !clicked[a][b];
    localStorage.setItem("clicked", JSON.stringify(clicked));
}