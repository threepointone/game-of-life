var gol = require('./index.js')({width:100, height:20});

// prepopulate some cells with live state
for(var i = 0;i<200;i++){
    var x = Math.ceil(Math.random()*100);
    var y = Math.ceil(Math.random()*20);
    gol.at(x, y, true);    
}

setInterval(function(){
    gol.step();
    console.log(gol.str());
},100);

