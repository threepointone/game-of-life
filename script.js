var grid = require('./index.js')({
    width: 100,
    height: 20
});

// prepopulate some cells with live state
for(var i = 0; i < 200; i++) {
    var x = Math.ceil(Math.random() * 100);
    var y = Math.ceil(Math.random() * 20);
    grid.at(x, y, true);
}

setInterval(function() {
    grid.step();
    console.log(grid.str());
}, 100);

// grid.at(x,y) will get you life/death at every cell. 