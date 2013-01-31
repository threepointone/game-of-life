var gol = require('./index.js')();

// prepopulate some cells with live state
for(var i = 0;i<20;i++){
    gol.at(Math.ceil(Math.random()*20), Math.ceil(Math.random()*20), true);
    console.log(gol);
}

