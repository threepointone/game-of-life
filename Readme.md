
# game-of-life

  A generic Game Of Life implementation in javascript

## Installation

    $ component install threepointone/game-of-life

## API
```js
var grid = require('game-of-life')({width:30, height:20});

// prepopulate some cells 

for(var i = 0;i<50;i++){
    var x = Math.ceil(Math.random()*20);
    var y = Math.ceil(Math.random()*20);
    grid.at(x, y, true);    
}

// run it 100 times

for(var i=100;i--;){
    grid.step();
}

// grid.at(x,y) will get you life/death at every cell. 


```
   

## License

  MIT
