module.exports = Grid;


function Grid(options) {
    options = options || {};
    // assuming 2 dimensional grid, standard rules
    if(!(this instanceof Grid)) return new Grid(options);
    this.grid = [];
    this.width = options.width || 20;
    this.height = options.height || 20;

};

Grid.prototype.step = function() {
    for(var i = this.width; i--;) {
        for(var j = this.height; j--;)
    }
};

Grid.prototype.rules = function() {
    // applies rules and sends back true or false on basis of live or dead
    if(this.grid[x][y] === true) { // live cell
        switch(this.neighbors(x, y)) {
        case 0:
        case 1:
            return false;
        case 2:
        case 3:
            return true;
        default:
            return false;
        }
    } else {
        if(this.neighbors(x, y) === 3) {
            return true;
        }
    }
    return false;
};
Grid.prototype.neighbors = function() {
    var ctr = 0;
    for(var i = x - 1; i < x + 2; i++) {
        for(var j = y - 1; j < y + 2; j++) {
            if(i >= 0 && i < this.width && j >= 0 && j < this.height && this.grid[x][y] === true) {
                ctr++;
            }
        }
    }
    return ctr;
};