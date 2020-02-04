const chai = require("chai");
const assert = chai.assert;


const aListES5 = require('./src/index').arrListES5;
const aListES6 = require('./src/index').arrListES6;
const lListES5 = require('./src/index').linkListES5;
const lListES6 = require('./src/index').linkListES6;

describe('Array list ES5', function () {
    beforeEach(function () {
        aListES5.clearList();
    });
    it('Если есть значение преобразовуеться в arrayList [0]', function () {
        const exp = 1;
        aListES5.push(1);
        const act = aListES5.collection[0];
        assert.equal(exp, act);
    });
    describe('Push метод, метод принимает значение и добаляет его в конец массива!', function () {
        it('Добавить один элемент', function () {
            const exp = 1;
            aListES5.push(1);
            const act = aListES5.collection[0];
            assert.equal(exp, act);
        });
        it('Добавить два элемента', function () {
            const exp = 2;
            aListES5.push(1);
            aListES5.push(2);
            const act = aListES5.collection[1];
            assert.equal(exp, act);
        });
        it('Добавить четыре элемента', function () {
            const exp = 4;
            aListES5.push(1);
            aListES5.push(2);
            aListES5.push(3);
            aListES5.push(4);
            const act = aListES5.collection[3];
            assert.equal(exp, act);
        });
        it('Вызвать метод push с 2 или более аргументами', function () {
            const exp = false;
            aListES5.push(1);
            aListES5.push(2);
            aListES5.push(3);
            aListES5.push(4);
            const act = aListES5.push(4, 2);
            assert.equal(exp, act);
        });
        it('Вызвать метод push без аргумента', function () {
            const exp = false;
            aListES5.push(1);
            aListES5.push(2);
            aListES5.push(3);
            aListES5.push(4);
            const act = aListES5.push();
            assert.equal(exp, act);
        });
        it('Вызвать метод push больше ожного раза + 2 элемента "null"', function () {
            const a = null;
            const b = null;
            const c = 7;
            const exp = 7;
            aListES5.push(1);
            aListES5.push(2);
            aListES5.push(3);
            aListES5.push(4);
            aListES5.push(a);
            aListES5.push(b);
            aListES5.push(c);
            const act = aListES5.collection[6];
            assert.equal(exp, act)
        })
    });

    describe('Size метод, получает новый последний индекс и размер массива.', function () {
        it('Вызвать метод size с трема элемантамы', function () {
            const exp = 3;
            aListES5.push(1);
            aListES5.push(2);
            aListES5.push(3);
            const act = aListES5.size();
            assert.equal(exp, act)
        });
        it('Вызвать метод size с помощью arg', function () {
            const exp = false;
            const arg = 1;
            aListES5.push(1);
            aListES5.push(2);
            aListES5.push(3);
            const act = aListES5.size(arg);
            assert.equal(exp, act)
        })
    });

    describe('Pop метод для удаления последнего значения', function () {
        it('Вызвать метод pop для удаление последнего елемента', function () {
            const exp = 6;
            aListES5.push(1);
            aListES5.push(2);
            aListES5.push(3);
            aListES5.push(4);
            aListES5.push(5);
            aListES5.push(6);
            aListES5.push(7);
            aListES5.pop();
            const act = aListES5.size();
            assert.equal(exp, act)
        });
        it('Вызвать метод pop в aList без value', function () {
            const exp = false;
            const act = aListES5.pop();
            assert.equal(exp, act)
        })
    });

    describe('Unshift метод, для добавления нового элемента в начало массива', function () {
        it('Добавить один єлемент', function () {
            const exp = 1;
            aListES5.unshift(1);
            const act = aListES5.collection[0];
            assert.equal(exp, act);
        });
        it('Добавить два єлемента', function () {
            const exp = 2;
            aListES5.unshift(1);
            aListES5.unshift(2);
            const act = aListES5.collection[0];
            assert.equal(exp, act);
        });
        it('Добавить новый элемент"null"', function () {
            const exp = null;
            aListES5.unshift(1);
            aListES5.unshift(2);
            aListES5.unshift(3);
            aListES5.unshift(null);
            const act = aListES5.collection[0];
            assert.equal(exp, act);
        });
    });

    describe('Shift метод для удаления первого значения', function () {
        it('Удаления первого элемента нашего списка', function () {
            const exp = 3;
            aListES5.unshift(1);
            aListES5.unshift(2);
            aListES5.unshift(3);
            aListES5.unshift(4);
            aListES5.shift();
            const act = aListES5.collection[0];
            assert.equal(exp, act);
        });
        it('Вызвать метод shift с arg', function () {
            const exp = false;
            const arg = 1;
            aListES5.push(1);
            aListES5.push(2);
            aListES5.push(3);
            aListES5.push(4);
            const act = aListES5.shift(arg);
            assert.equal(exp, act);
        });
        it('Вызвать метод shift в aList без value', function () {
            const exp = false;
            const act = aListES5.shift();
            assert.equal(exp, act)
        })
    });

    describe('toString метод для возврата значений в виде строки', function () {
        it('Преобразование в строку "1,2,3,4,5"', function () {
            const exp = '1,2,3,4,5';
            aListES5.push(1);
            aListES5.push(2);
            aListES5.push(3);
            aListES5.push(4);
            aListES5.push(5);
            const act = aListES5.toString();
            assert.equal(exp, act);
        });
    });

    describe('Sort метод для сортировки значений', function () {
        it("Метод сортировки без arg", function () {
            const exp = 12;
            aListES5.push(3);
            aListES5.push(2);
            aListES5.push(12);
            aListES5.sort();
            const act = aListES5.collection[0];
            assert.equal(exp, act)
        });
        it("Метод сортировки без arg", function () {
            const exp = 2;
            aListES5.push(3);
            aListES5.push(2);
            aListES5.push(12);
            aListES5.sort();
            const act = aListES5.collection[1];
            assert.equal(exp, act)
        });
        it("Метод сортировки без arg", function () {
            const exp = 3;
            aListES5.push(3);
            aListES5.push(2);
            aListES5.push(12);
            aListES5.sort();
            const act = aListES5.collection[2];
            assert.equal(exp, act)
        });
        it('Метод сортировки с arg function commit(a, b){return a-b}', function () {
            const exp = 1;
            aListES5.push(3);
            aListES5.push(2);
            aListES5.push(12);
            aListES5.push(1);
            aListES5.sort(function commit(a, b) {
                return a - b
            });
            const act = aListES5.collection[0];
            assert.equal(exp, act)
        });
        it('Метод сортировки с arg function commit(a, b){return a-b}', function () {
            const exp = 3;
            aListES5.push(3);
            aListES5.push(2);
            aListES5.push(12);
            aListES5.push(1);
            aListES5.sort(function (a, b) {
                return a - b
            });
            const act = aListES5.collection[2];
            assert.equal(exp, act)
        });
        it('Метод сортировки с arg function commit(a, b){return a-b}', function () {
            const exp = 12;
            aListES5.push(3);
            aListES5.push(2);
            aListES5.push(12);
            aListES5.push(1);
            aListES5.sort(function (a, b) {
                return a - b
            });
            const act = aListES5.collection[3];
            assert.equal(exp, act)
        });
        it('Метод сортировки принимает arg, а не функцию', function () {
            const exp = false;
            const arg = 1;
            const act = aListES5.sort(arg);
            assert.equal(exp, act)
        })
    });

    describe('toLinkedList Метод преобразование в LinkedList', function () {
        it('Визов с аргементом', function () {
            const exp = false;
            const arg = 1;
            aListES5.push(1);
            aListES5.push(2);
            aListES5.push(3);
            const act = aListES5.toLinkedList(arg);
            assert.equal(exp, act)
        });
        it('Без значение', function () {
            const exp = false;
            const act = aListES5.toLinkedList()
            assert.equal(exp, act)
        });
    });
    describe('Reverse медод для переворота масива', function () {
        it('Визов метода "1,2,3,4"', function () {
            const exp = [1, 2, 3, 4];
            aListES5.push(4);
            aListES5.push(3);
            aListES5.push(2);
            aListES5.push(1);
            aListES5.reverse();
            const act = aListES5.collection;
            assert.deepEqual(exp, act);
        });
        it('Визов метода "1,2,3,55"', function () {
            const exp = [1, 2, 3, 55];
            aListES5.push(55);
            aListES5.push(3);
            aListES5.push(2);
            aListES5.push(1);
            aListES5.reverse();
            const act = aListES5.collection;
            assert.deepEqual(exp, act);
        });
    });
});


describe('Array list ES6', function () {
    beforeEach(function () {
        aListES6.clearList();
    });
    it('Если есть значение преобразовуеться в arrayList [0]', function () {
        const exp = 1;
        aListES6.push(1);
        const act = aListES6.collection[0];
        assert.equal(exp, act);
    });
    describe('Push метод, метод принимает значение и добаляет его в конец массива!', function () {
        it('Добавить один элемент', function () {
            const exp = 1;
            aListES6.push(1);
            const act = aListES6.collection[0];
            assert.equal(exp, act);
        });
        it('Добавить два элемента', function () {
            const exp = 2;
            aListES6.push(1);
            aListES6.push(2);
            const act = aListES6.collection[1];
            assert.equal(exp, act);
        });
        it('Добавить четыре элемента', function () {
            const exp = 4;
            aListES6.push(1);
            aListES6.push(2);
            aListES6.push(3);
            aListES6.push(4);
            const act = aListES6.collection[3];
            assert.equal(exp, act);
        });
        it('Вызвать метод push больше ожного раза + 2 элемента "null"', function () {
            const a = null;
            const b = null;
            const c = 7;
            const exp = 7;
            aListES6.push(1);
            aListES6.push(2);
            aListES6.push(3);
            aListES6.push(4);
            aListES6.push(a);
            aListES6.push(b);
            aListES6.push(c);
            const act = aListES6.collection[6];
            assert.equal(exp, act)
        })
    });

    describe('Size метод, получает новый последний индекс и размер массива.', function () {
        it('Вызвать метод size с трема элемантамы', function () {
            const exp = 3;
            aListES6.push(1);
            aListES6.push(2);
            aListES6.push(3);
            const act = aListES6.size();
            assert.equal(exp, act)
        });
    });

    describe('Pop метод для удаления последнего значения', function () {
        it('Вызвать метод pop для удаление последнего елемента', function () {
            const exp = 6;
            aListES6.push(1);
            aListES6.push(2);
            aListES6.push(3);
            aListES6.push(4);
            aListES6.push(5);
            aListES6.push(6);
            aListES6.push(7);
            aListES6.pop();
            const act = aListES6.size();
            assert.equal(exp, act)
        });
    });

    describe('Unshift метод, для добавления нового элемента в начало массива', function () {
        it('Добавить один єлемент', function () {
            const exp = 1;
            aListES6.unshift(1);
            const act = aListES6.collection[0];
            assert.equal(exp, act);
        });
        it('Добавить два єлемента', function () {
            const exp = 2;
            aListES6.unshift(1);
            aListES6.unshift(2);
            const act = aListES6.collection[0];
            assert.equal(exp, act);
        });
        it('Добавить новый элемент"null"', function () {
            const exp = null;
            aListES6.unshift(1);
            aListES6.unshift(2);
            aListES6.unshift(3);
            aListES6.unshift(null);
            const act = aListES6.collection[0];
            assert.equal(exp, act);
        });
    });

    describe('Shift метод для удаления первого значения', function () {
        it('Удаления первого элемента нашего списка', function () {
            const exp = 3;
            aListES6.unshift(1);
            aListES6.unshift(2);
            aListES6.unshift(3);
            aListES6.unshift(4);
            aListES6.shift();
            const act = aListES6.collection[0];
            assert.equal(exp, act);
        });
    });

    describe('toString метод для возврата значений в виде строки', function () {
        it('Преобразование в строку "1,2,3,4,5"', function () {
            const exp = '1,2,3,4,5';
            aListES6.push(1);
            aListES6.push(2);
            aListES6.push(3);
            aListES6.push(4);
            aListES6.push(5);
            const act = aListES6.toString();
            assert.equal(exp, act);
        });
    });

    describe('Sort метод для сортировки значений', function () {
        it("Метод сортировки без arg", function () {
            const exp = 12;
            aListES6.push(3);
            aListES6.push(2);
            aListES6.push(12);
            aListES6.sort();
            const act = aListES6.collection[0];
            assert.equal(exp, act)
        });
        it("Метод сортировки без arg", function () {
            const exp = 2;
            aListES6.push(3);
            aListES6.push(2);
            aListES6.push(12);
            aListES6.sort();
            const act = aListES6.collection[1];
            assert.equal(exp, act)
        });
        it("Метод сортировки без arg", function () {
            const exp = 3;
            aListES6.push(3);
            aListES6.push(2);
            aListES6.push(12);
            aListES6.sort();
            const act = aListES6.collection[2];
            assert.equal(exp, act)
        });
        it('Метод сортировки с arg function commit(a, b){return a-b}', function () {
            const exp = 1;
            aListES6.push(3);
            aListES6.push(2);
            aListES6.push(12);
            aListES6.push(1);
            aListES6.sort(function commit(a, b) {
                return a - b
            });
            const act = aListES6.collection[0];
            assert.equal(exp, act)
        });
        it('Метод сортировки с arg function commit(a, b){return a-b}', function () {
            const exp = 3;
            aListES6.push(3);
            aListES6.push(2);
            aListES6.push(12);
            aListES6.push(1);
            aListES6.sort(function (a, b) {
                return a - b
            });
            const act = aListES6.collection[2];
            assert.equal(exp, act)
        });
        it('Метод сортировки с arg function commit(a, b){return a-b}', function () {
            const exp = 12;
            aListES6.push(3);
            aListES6.push(2);
            aListES6.push(12);
            aListES6.push(1);
            aListES6.sort(function (a, b) {
                return a - b
            });
            const act = aListES6.collection[3];
            assert.equal(exp, act)
        });
        it('Метод сортировки принимает arg, а не функцию', function () {
            const exp = false;
            const arg = 1;
            const act = aListES6.sort(arg);
            assert.equal(exp, act)
        })
    });

    describe('toLinkedList Метод преобразование в LinkedList', function () {
        it('Визов с аргементом', function () {
            const exp = false;
            const arg = 1;
            aListES6.push(1);
            aListES6.push(2);
            aListES6.push(3);
            const act = aListES6.toLinkedList(arg);
            assert.equal(exp, act)
        });
        it('Без значение', function () {
            const exp = false;
            const act = aListES6.toLinkedList();
            assert.equal(exp, act)
        });
    });
    describe('Reverse медод для переворота масива', function () {
        it('Визов метода "1,2,3,4"', function () {
            const exp = [1, 2, 3, 4];
            aListES6.push(4);
            aListES6.push(3);
            aListES6.push(2);
            aListES6.push(1);
            aListES6.reverse();
            const act = aListES6.collection;
            assert.deepEqual(exp, act);
        });
        it('Визов метода "1,2,3,55"', function () {
            const exp = [1, 2, 3, 55];
            aListES6.push(55);
            aListES6.push(3);
            aListES6.push(2);
            aListES6.push(1);
            aListES6.reverse();
            const act = aListES6.collection;
            assert.deepEqual(exp, act);
        });
    });
});


describe('LinkedList ES5', function () {
    beforeEach(function () {
        lListES5.clearList();
    });
    describe('Size матод для длини листа', function () {

        it('Три елемента', function () {
            const exp = 3;
            lListES5.push(1);
            lListES5.push(2);
            lListES5.push(3);
            const act = lListES5.size();

            assert.equal(exp, act)
        });
    });
    describe('Push метод, метод принимает значение и добаляет его в конец', function () {

        it('Три єлемента', function () {
            const exp = 2;
            lListES5.push(1);
            lListES5.push(2);
            lListES5.push(3);
            console.log(lListES5);
            const act = lListES5.root.head.next.data;

            assert.equal(exp, act)
        });
    });
    describe('Pop удалеет последний елем', function () {

        it('Create method pop to delete a last Noda in our lList', function () {
            const exp = 2;
            lListES5.push(1);
            lListES5.push(2);
            lListES5.push(3);
            lListES5.pop();
            const act = lListES5.size();

            assert.equal(exp, act)
        });
    });
    describe('Unshift method', function () {

        it('Create a lList unshift method to create new Noda in the end of our lListand put there value,' +
            ' and way to next and prev noda ', function () {
            const exp = 3;
            lListES5.unshift(1);
            lListES5.unshift(2);
            lListES5.unshift(3);
            const act = lListES5.root.head.data;

            assert.equal(exp, act)
        });
    });
    describe('Shift method', function () {

        it('Create method shift to delete a first Nods in our lList', function () {
            const exp = 2;
            lListES5.push(1);
            lListES5.push(2);
            lListES5.push(3);
            lListES5.shift();
            const act = lListES5.size();

            assert.equal(exp, act)
        });
    });
    describe('Sort method', function () {
        it("Sort method don't take arg", function () {
            const exp = 12;
            lListES5.push(3);
            lListES5.push(2);
            lListES5.push(12);
            lListES5.sort();
            const act = lListES5.root.head.data;

            assert.equal(exp, act)
        });
    });
    describe('create method toaList to create new the same object aList inside ' +
        'our lList ', function () {
        it('try cause method aList with arg', function () {
            const exp = false;
            const arg = 1;
            lListES5.push(1);
            lListES5.push(2);
            lListES5.push(3);
            const act = lListES5.toArrayList(arg);

            assert.equal(exp, act)
        });
    });
});

describe('LinkedList ES6', function () {
    beforeEach(function () {
        lListES6.clearList();
    });
    describe('Size матод для длини листа', function () {

        it('Три елемента', function () {
            const exp = 3;
            lListES6.push(1);
            lListES6.push(2);
            lListES6.push(3);
            const act = lListES6.size();

            assert.equal(exp, act)
        });
    });
    describe('Push метод, метод принимает значение и добаляет его в конец', function () {

        it('Три єлемента', function () {
            const exp = 2;
            lListES6.push(1);
            lListES6.push(2);
            lListES6.push(3);
            console.log(lListES6);
            const act = lListES6.root.head.next.data;

            assert.equal(exp, act)
        });
    });
    describe('Pop удалеет последний елем', function () {

        it('Create method pop to delete a last Noda in our lList', function () {
            const exp = 2;
            lListES6.push(1);
            lListES6.push(2);
            lListES6.push(3);
            lListES6.pop();
            const act = lListES6.size();

            assert.equal(exp, act)
        });
    });
    describe('Unshift method', function () {

        it('Create a lList unshift method to create new Noda in the end of our lListand put there value,' +
            ' and way to next and prev noda ', function () {
            const exp = 3;
            lListES6.unshift(1);
            lListES6.unshift(2);
            lListES6.unshift(3);
            const act = lListES6.root.head.data;

            assert.equal(exp, act)
        });
    });
    describe('Shift method', function () {

        it('Create method shift to delete a first Nods in our lList', function () {
            const exp = 2;
            lListES6.push(1);
            lListES6.push(2);
            lListES6.push(3);
            lListES6.shift();
            const act = lListES6.size();

            assert.equal(exp, act)
        });
    });
    describe('Sort method', function () {
        it("Sort method don't take arg", function () {
            const exp = 12;
            lListES6.push(3);
            lListES6.push(2);
            lListES6.push(12);
            lListES6.sort();
            const act = lListES6.root.head.data;

            assert.equal(exp, act)
        });
    });
});