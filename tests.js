require('should');

var gol = require('./index.js');

describe('Game Of Life', function() {
    describe('at', function() {
        describe('getting', function() {

        });
        describe('setting', function() {

        });
    });
    describe('neighbors', function() {
        it('should return the proper number of live neighbors', function() {
            var g = gol();
            g.at(2, 2, true);
            g.at(2, 3, true);
            g.neighbors(2, 2).should.eql(1);
            g.neighbors(2, 3).should.eql(1);
            g.neighbors(4, 4).should.eql(0);
        })
    });
    describe('rules', function() {

    });
    describe('step', function() {

    });
});