const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("Tests calculateNumber function:", function() {
    describe("Calculates two integers (type: SUM):", function() {
        it('Returns 4.', function() {
            assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
        });
    });

    describe("Calculates one float & one integer (type: SUBTRACT):", function() {
        it('Returns -3.', function() {
            assert.strictEqual(calculateNumber("SUBTRACT", 1, 3.7), -3);
        });
    });

    describe("Calculates one float & one integer (round down) (type: DIVIDE):", function() {
        it("Returns 0.2.", function(){
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
	});
    });

    describe("Calculates one float & one integer (round down) (type: DIVIDE):", function() {
        it('Returns Error', function() {
            assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), 'Error');
        });
    });

});

