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


var clicked = [[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false]];

function startup(){
    console.log("startin up")
    if (localStorage.hasOwnProperty("clicked")) {
        clicked = JSON.parse(localStorage.getItem("clicked"));
        console.log("loaded")
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            console.log("looping")
            if (clicked[i][j]) {
                console.log("proc")
                document.getElementById("square"+i.toString()+j.toString()).className = "square active";
            }
        }
    }
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
