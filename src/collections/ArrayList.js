function List() {
    this.push = function () {
    };
    this.pop = function () {
    };
    this.unshift = function () {
    };
    this.shift = function () {
    };
    this.sort = function () {
    };
    this.size = function () {
    };
    this.toString = function () {
    };
    this.clearList = function () {
    };
    this.toLinkedList = function () {
    };
    this.reverse = function () {
    };
    this.map = function () {
    };
    this.reduce = function () {
    };
}

function AList() {
    List.call(this);
    this.collection = [];
    this.length = 0;
}

const aList = new AList();


aList.size = function () {
    if (arguments.length > 0) return false;
    return this.length;
};

aList.clearList = function () {
    this.length = 0;
    this.collection = [];
};

aList.push = function (el) {
    if (arguments.length > 1 || arguments.length < 1) return false;
    this.collection[this.length] = el;
    this.length++;
};

aList.pop = function () {
    if (arguments.length > 0 || this.size() === 0) return false;
    let Array = [];
    for (let i = 0; i < this.length - 1; i++) {
        Array[i] = this.collection[i];
    }
    this.collection = Array;
    this.length--;
};

aList.unshift = function (el) {
    if (arguments.length > 1 || arguments.length < 1) return false;
    let Array = [];
    let L = 0;
    for (let i = 0; i < this.length; i++) {
        Array[L + 1] = this.collection[i];
        L++;
    }
    this.collection = Array;
    this.collection[0] = el;
    this.length++;
};

aList.shift = function () {
    if (arguments.length > 0 || this.size() === 0) return false;
    let Array = [];
    let L = 0;
    for (let i = 1; i < this.length; i++) {
        Array[L] = this.collection[i];
        L++;
    }
    this.collection = Array;
    this.length--;
    return this.collection;
};

aList.toString = function () {
    let String = '';
    for (let i = 0; i < this.size(); i++) {
        String += this.collection[i] + ',';
    }
    String = String.substring(0, String.length - 1);

    return String
};

aList.sort = function (compare) {
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

aList.toLinkedList = function () {
    if (arguments.length > 0) return false;
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

aList.reverse = function () {
    let tmpArr = [];
    let j = 0;
    for (let i = this.collection.length - 1; i >= 0; i--) {
        tmpArr[j] = this.collection[i];
        j++
    }
    this.collection = tmpArr;
};

aList.map = function (MyFunction) {
    if (!MyFunction) return false;
    const arraylist = new ArrayList();
    if (typeof MyFunction == "function")
        for (let i = 0; i < this.size(); i++) {
            arraylist.push(MyFunction(this.aList[i], i, this.aList));
        }

    return arraylist;
};

aList.reduce = function (MyFunction, initValue) {
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

module.exports.test = aList;


