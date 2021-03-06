class List {
    constructor() {
        this.push = () => {
        };
        this.pop = () => {
        };
        this.unshift = () => {
        };
        this.shift = () => {
        };
        this.sort = () => {
        };
        this.size = () => {
        };
        this.toString = () => {
        };
        this.clearList = () => {
        };
        this.sort = () => {
        };
        this.toLinkedList = () => {
        };
        this.reverse = () => {
        };
        this.map = () => {
        };
        this.reduce = () => {
        };
    }
}

class AList extends List {
    collection = [];
    length = 0;
    size = () => {
        return this.length;
    };

    clearList = () => {
        this.length = 0;
        this.collection = [];
    };

    push = (el) => {
        this.collection[this.length] = el;
        this.length++;
    };

    pop = () => {
        let tempArray = [];
        let lastValue = this.collection[this.length - 1];
        for (let i = 0; i < this.length - 1; i++) {
            tempArray[i] = this.collection[i];

        }
        this.collection = tempArray;
        this.length--;
        return lastValue;
    };

    unshift = (el) => {
        let tempArray = [];
        let k = 0;
        for (let i = 0; i < this.length; i++) {
            tempArray[k + 1] = this.collection[i];
            k++;
        }
        this.collection = tempArray;
        this.collection[0] = el;
        this.length++;
    };

    shift = () => {
        let tempArray = [];
        let k = 0;
        let firstValue = this.collection[0];
        for (let i = 1; i < this.length; i++) {
            tempArray[k] = this.collection[i];
            k++;
        }
        this.collection = tempArray;
        this.length--;
        return firstValue;
    };

    toString = () => {
        let tmpString = '';
        for (let i = 0; i < this.size(); i++) {
            tmpString += this.collection[i] + ',';
        }
        tmpString = tmpString.substring(0, tmpString.length - 1);

        return tmpString
    };

    sort = (compare) => {
        if (compare) {
            if (typeof compare == "function") {
                for (let i = 0; i < this.size(); i++) {
                    for (let j = 0; j < this.size(); j++) {
                        if (j === this.size() - 1)
                            break;
                        if (compare(this.collection[j], this.collection[j + 1]) > 0) {
                            let tmp = this.collection[j + 1];
                            this.collection[j + 1] = this.collection[j];
                            this.collection[j] = tmp;
                        }
                    }
                }
            } else {
                return false
            }
        } else {
            for (let i = 0; i < this.size(); i++) {
                for (let j = 0; j < this.size(); j++) {
                    if (j === this.size() - 1)
                        break;
                    if (String(this.collection[j]) > String(this.collection[j + 1])) {
                        let tmp = this.collection[j + 1];
                        this.collection[j + 1] = this.collection[j];
                        this.collection[j] = tmp;
                    }
                }
            }
        }
    };

    toLinkedList = () => {
        if (!this[0]) return false;
        let tmpLList = {
            root: {
                head: null,
                tail: null,
            }
        };

        function createTmpNode(el) {
            return {
                data: el ? el : null,
                prev: null,
                next: null,
            };
        };

        for (let i = 0; i < aList.size(); i++) {
            let node = createTmpNode(aList.collection[i]);
            if (!tmpLList.root.head) {
                tmpLList.root.head = node;
                tmpLList.root.tail = node;
            } else {
                node.prev = tmpLList.root.tail;
                tmpLList.root.tail.next = node;
                tmpLList.root.tail = node;
                node.next = tmpLList.root;
            }
        }
        return tmpLList
    };

    reverse = function () {
        let tmpArr = [];
        let j = 0;
        for (let i = this.collection.length - 1; i >= 0; i--) {
            tmpArr[j] = this.collection[i];
            j++
        }
        this.collection = tmpArr;
    };

    map = function (MyFunction) {
        if (!MyFunction) return false;
        const arraylist = new ArrayList();
        if (typeof MyFunction == "function")
            for (let i = 0; i < this.size(); i++) {
                arraylist.push(MyFunction(this.aList[i], i, this.aList));
            }

        return arraylist;
    };

    reduce = function (MyFunction, initValue) {
        if (!MyFunction) return 0;
        let result = 0;
        if (initValue) result = initValue;
        else result = 0;
        const newArray = this.getList();
        if (typeof MyFunction == "function") {
            for (let i = 0; i < this.size(); i++) {
                result = MyFunction(result, newArray[i], i, newArray);
            }
        }
        return result;
    };
}

const arList = new AList();

module.exports.arrListES6 = arList;