const chai = require("chai");
const assert = chai.assert;


const v = require('./src/index').test1;

describe('Array list', function () {
    beforeEach(function () {
        v.clearList();
    });
    it('Have key value index of array, appeal arrayList[0] , exp fist value of our obj', function () {
        const exp = 1;
        v.push(1);
        const act = v.collection[0];
        assert.equal(exp, act);
    });

    describe('Push method', function () {
        it('We write a new method push to our aList, this method accept value and creates a new kay-value ' +
            'like at a classic array', function () {
            const exp = 1;
            v.push(1);
            const act = v.collection[0];
            assert.equal(exp, act);
        });
        it('Push more', function () {
            const exp = 2;
            v.push(1);
            v.push(2);
            const act = v.collection[1];
            assert.equal(exp, act);
        });
    });
});