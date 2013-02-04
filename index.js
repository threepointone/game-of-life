module.exports = Grid;

function Grid(options) {
    options = options || {};
    // assuming 2 dimensional grid, standard rules
    if(!(this instanceof Grid)) return new Grid(options);
    this.grid = [];
    this.width = options.width || 20;
    this.height = options.height || 20;
}

Grid.prototype.at = function(x, y, live) {
    if(typeof live === 'boolean') {
        this.grid[y] = this.grid[y] || [];
        this.grid[y][x] = live;
        return this;
    }

    if(this.grid[y]) {
        return this.grid[y][x] || false;
    }
    return false;
};

Grid.prototype.step = function() {
    var _grid = [];
    for(var i = this.width; i--;) {
        for(var j = this.height; j--;) {
            var state = this.rules(i, j);
            if(state) {
                _grid[j] = _grid[j] || [];
                _grid[j][i] = state;
            }
        }
    }
    this.grid = _grid;
    return this;
};

Grid.prototype.rules = function(x, y) {
    // applies rules and sends back true or false on basis of live or dead
    if(this.at(x, y) === true) { // live cell
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

Grid.prototype.neighbors = function(x, y) {
    var ctr = 0;
    for(var i = x - 1; i < x + 2; i++) {
        for(var j = y - 1; j < y + 2; j++) {
            if((i >= 0) && (i < this.width) && (j >= 0) && (j < this.height) && (!((x === i) && (y === j))) && (this.at(i, j) === true)) {
                ctr++;
            }
        }
    }
    return ctr;
};

Grid.prototype.str = function() {
    var str = [];
    for(var j = 0; j < this.height; j++) {
        for(var i = 0; i < this.width; i++) {
            str += (this.at(i, j) ? 'O' : '.');
        }
        str += '\n';
    }
    return str;

};