// function populate() {
//     document.getElementById("links").innerHTML = localStorage.getItem("links");

//     var css = '.linkbox:hover{ background-color: '+localStorage.getItem("color")+' } .searchbar:focus{ border-color: '+localStorage.getItem("color")+' }';
//     var style = document.createElement('style');

//     if (style.styleSheet) {
//         style.styleSheet.cssText = css;
//     } else {
//         style.appendChild(document.createTextNode(css));
//     }

//     if (localStorage.getItem("ptable")) {
//         document.getElementById("ptable").style.display = "inline";
//         document.getElementById("photon").style.display = "inline";
//     }

//     document.getElementsByTagName('head')[0].appendChild(style);

// }

// function showptable() {
//     localStorage.setItem("ptable", true)
// }

// function update() {
//     localStorage.setItem("links", "<a href=\"https:\/\/www.tumblr.com/dashboard/blog_subs\"> <span class=\"linkbox\">t</span></a><a href=\"https://www.xkcd.com\"> <span class=\"linkbox\">x</span></a><a href=\"https://www.youtube.com/feed/subscriptions\"> <span class=\"linkbox\">y</span></a>");
// }

// function color_update() {
//     localStorage.setItem("color", "#101040");
// }

function fyShuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}


// TODO: this is a test for now, update eventually with better/more sophisticated list, better formatting
var bingo_task_list = [
"pats win",
"seahawks win",
"challenge flag thrown",
"defense or special teams touchdown",
"blocked punt/kick",
"40+ yd reception",
"40+ yd rush",
"one receiver or running back scores multiple touchdowns",
"a player other than a starting QB throws a pass",
"overtime",
"multiple penalties in one play",
"missed field goal or extra point",
"two-point conversion attempt",
"jesus advertisement",
"political advertisement",
"truck advertisement",
"ai advertisement",
"coca cola advertisement",
"dog in an advertisement ",
"olympics advertisement",
"broadcast shows clip of super bowl 49",
"attendee of this party gets a text from a family member confused by bad bunny",
"camera operator gets a shoutout",
"surprise guest at halftime show with at least 10 million monthly spotify listeners",
"two-part ad with setup and punchline minutes apart",
"six seven joke",
"broadcast shows shot of boston skyline",
"bad bunny adds or removes a piece of clothing during halftime show",
"puerto rican flag more than ten feet across",
"commentator makes ill-advised attempt at singing a bad bunny song",
"back-to-back gambling ads",
"fan with 100% of their visible skin painted",
"non-player on sideline knocked over by player",
"mic'd up player or coach curses",
"full-screen infographic about patriots super bowl appearances",
"unplanned game delay of more than ten minutes ",
"non-human animal spotted on field"
];

var clicked = [[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false]];
var bingo_strings = [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]];

function startup(){
    console.log("startin up")
    if (localStorage.hasOwnProperty("clicked")) {
        clicked = JSON.parse(localStorage.getItem("clicked"));
        console.log("loaded");
    }
    if (localStorage.hasOwnProperty("bingo_strings")) {
        bingo_strings = JSON.parse(localStorage.getItem("bingo_strings"));
        console.log("loaded bingo_strings");
    } else {
        create_board(false); //TODO: need to prompt for team here
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            console.log("looping")
            let current_square = document.getElementById("square"+i.toString()+j.toString());
            if (clicked[i][j]) {
                console.log("proc");
                // document.getElementById("square"+i.toString()+j.toString()).className = "square active";
                current_square.className = "square active";
            }
            current_square.innerHTML = bingo_strings[i][j]
        }
    }
    
}

function update_style(root_for_pats) {
    // TODO: this function should update stylesheet to make colors of bingo board match team colors.
    return
}

function create_board(root_for_pats) {
    // TODO: this function should create a randomized bingo board, save it to local storage. if root_for_pats, center square is pats win. else, seahawks win
    fyShuffle(bingo_task_list);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            bingo_strings[i][j] = bingo_task_list.pop(); 
        }
    }
    localStorage.setItem("bingo_strings", JSON.stringify(bingo_strings));
    return
}

function square_clicked(a, b) {
    // TODO: replace this with actual value for if square is clicked or not
    if (document.getElementById("square"+a.toString()+b.toString()).className == "square active"){
        document.getElementById("square"+a.toString()+b.toString()).className = "square inactive";
    } else {
        document.getElementById("square"+a.toString()+b.toString()).className = "square active";
    }
    console.log(clicked)
    clicked[a][b] = !clicked[a][b];
    console.log(clicked)
    localStorage.setItem("clicked", JSON.stringify(clicked));
}
// TODO: will need to update stored vals
// localStorage.setItem("links", "<a href=\"https:\/\/www.tumblr.com/dashboard/blog_subs\"> <span class=\"linkbox\">t</span></a><a href=\"https://www.xkcd.com\"> <span class=\"linkbox\">x</span></a><a href=\"https://www.youtube.com/feed/subscriptions\"> <span class=\"linkbox\">y</span></a>");
