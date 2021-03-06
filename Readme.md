
# game-of-life

  A generic Game Of Life implementation in javascript

## Installation

    $ component install threepointone/game-of-life

## API
```js
var grid = require('game-of-life')({
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

```

```
....................................................................................................
..............................................................OO....................................
.............................................................O..OOOOOO..............................
.............................................................O.OOO....O.............................
.................................................O............O..OOO...O............................
................................................O.O.................O..O............................
................................................O.O..................O..O...........................
.................................OO..............O..................O..O............................
................................O..O.................................O.O...O........................
.................................OO.......................................O.OO......................
.........................................................................OO.OO......................
..........................................................................O...OO....................
..............................................................................OO....OO..............
...........................................................................OOOOO....OO..............
......................................................................OOO...........................
.......................................................................OO...........................
........................O...............................................O...........................
........................O....................................................O......................
........................O.............OO..................................O..O......................
......................................OO...............................OO.O.O.......................

```
   

## License

  MIT
