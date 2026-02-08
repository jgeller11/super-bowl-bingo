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
    var bingo_task_list = ["","","","","","","","","","","","","","","","","","","","","","","",""];
    var bingo_strings = [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]];
    var football_likely = [
        "Challenge flag",
        "Blocked punt/kick",
        "40+ yd reception",
        "40+ yd rush",
        "40+ yd field goal",
        "One non-QB scores multiple touchdowns",
        "A player other than a starting QB throws a pass",
        "Overtime",
        "Challenged call",
        "Interception",
        "Fumble",
        "Attempted 4th down conversion"
    ];
    var pats_good = [
        "TreVeyon Henderson touchdown",
        "Hunter Henry touchdown",
        "Stefon Diggs touchdown",
        "Rhamondre Stevenson touchdown",
        "Drake Maye rushing TD",
        "Drake Maye passing TD",
        "Borregales field goal"
    ];
    var sea_good = [
        "Jaxon Smith-Njigba touchdown",
        "Cooper Kupp touchdown",
        "Zach Charbonnet touchdown",
        "Kenneth Walker III touchdown",
        "Sam Darnold rushing TD",
        "Sam Darnold passing TD",
        "Jason Myers field goal"
    ];
    var football_unlikely = [
        "QB catches a pass",
        "60+ yd reception",
        "60+ yd rush",
        "60+ yd field goal",
        "Defense/special teams touchdown",
        "Multiple penalties in one play",
        "Missed field goal or extra point",
        "2pt conversion attempt",
        "Safety",
        "Doink",
        "Blocked punt/kick",
        "Fake punt/kick",
        "Player tries to hurdle another player",
        "Delay of game",
        "12 men on the field",
        "Intentional grounding",
        "American Idiot performed"
    ];
    var non_football_likely = [
        "Jesus ad",
        "Political ad",
        "Truck ad",
        "AI ad featuring child",
        "Coca Cola ad",
        "Dog in an ad ",
        "Olympics ad",
        "Ad which is only text",
        "Broadcast shows clip of Super Bowl XLIX",
        "Partygoer's family confused by halftime show",
        "Camera operator gets a shoutout",
        "Surprise guest at halftime show",
        "2 part ad with setup and punchline minutes apart",
        "Broadcast shows shot of Boston skyline",
        "Broadcast shows shot of Golden Gate Bridge",
        "Ad with Glinda and Elphaba",
        "Commentator mentions Olympics",
        "Ad featuring Seahawk and Patriot",
        "Bad Bunny performs NUEVAYoL",
        "Bad Bunny performs BAILE INoLVIDABLE",
        "Bad Bunny performs Tití Me Preguntó",
        "Commentator draws on screen",
        "Player mentions God/Jesus in interview"
    ];
    var non_football_unlikely = [
        "Six seven joke",
        "Ad primarily in Spanish",
        "Prominent frog in halftime show",
        "Bad Bunny adds/removes clothing on camera",
        "Puerto Rican flag more than 10ft across",
        "Broadcaster attempts to sing a Bad Bunny song",
        "Commentator says \"tush push\"",
        "Back-to-back gambling ads",
        "Fan with 100% of their visible skin painted",
        "Non-player on sideline knocked over by player",
        "Mic'd up player or coach curses",
        "Full-screen graphic about Patriots Super Bowls",
        "Unplanned game delay of more than 10 minutes",
        "Non-human animal spotted on field",
        "\"Drake 'Drake Maye' Maye\"",
        "Bad Bunny wears a pava"
    ];
    
    fyShuffle(football_likely);
    fyShuffle(pats_good);
    fyShuffle(sea_good);
    fyShuffle(football_unlikely);
    fyShuffle(non_football_likely);
    fyShuffle(non_football_unlikely);
    for (let i = 0; i<8; i++){
        bingo_task_list[i] = football_likely.pop();
    }
    for (let i = 0; i<2; i++){
        if (root_for_pats) {
            bingo_task_list[8+i] = pats_good.pop();
        } else {
            bingo_task_list[8+i] = sea_good.pop();
        }
    }
    for (let i = 0; i<2; i++){
        bingo_task_list[i+10] = football_unlikely.pop();
    }
    for (let i = 0; i<7; i++){
        bingo_task_list[i+12] = non_football_likely.pop();
    }
    for (let i = 0; i<5; i++){
        bingo_task_list[i+19] = non_football_unlikely.pop();
    }
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