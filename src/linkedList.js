function List() {
}

List.prototype.pop = function () {
};
List.prototype.map = function () {
};
List.prototype.push = function () {
};
List.prototype.sort = function () {
};
List.prototype.size = function () {
};
List.prototype.shift = function () {
};
List.prototype.reduce = function () {
};
List.prototype.reverse = function () {
};
List.prototype.unshift = function () {
};
List.prototype.toString = function () {
};
List.prototype.clearList = function () {
};

LList.prototype = Object.create(List.prototype);
const lList = new LList();


function LList() {
    this.root = {
        head: null,
        tail: null,
        length: 0,
    };
}

LList.prototype.clearList = function () {
    this.root = {
        head: null,
        tail: null,
        length: 0,
    }
};

LList.prototype.createNode = function (el) {
    return {
        data: el ? el : null,
        prev: null,
        next: null,
    };
};

LList.prototype.size = function () {
    if (arguments.length > 0) return false;
    return this.root.length;
};

LList.prototype.push = function (el) {
    if (arguments.length > 1 || arguments.length < 1) return false;
    let node = this.createNode(el);

    if (!this.root.head) {
        this.root.head = node;
        this.root.tail = node;
    } else {
        node.prev = this.root.tail;
        this.root.tail.next = node;
        this.root.tail = node;
        node.next = this.root;
    }
    this.root.head.prev = node;
    this.root.length++;
};

LList.prototype.pop = function () {
    if (arguments.length > 0 || this.root.head === null) return false;
    this.root.tail.prev.next = this.root;
    this.root.length--;
};

LList.prototype.unshift = function (el) {
    if (arguments.length > 1 || arguments.length < 1) return false;
    let node = this.createNode(el);

    if (!this.root.head) {
        this.root.head = node;
        this.root.tail = node;
    } else {
        node.prev = this.root;
        this.root.head.prev = node;
        node.next = this.root.head;
        this.root.head = node;
        this.root.tail.next = this.root;
    }
    this.root.length++
};

LList.prototype.shift = function () {
    if (arguments.length > 0) return false;
    if (this.root.head === null) return false;
    let tmpList = this.root.head.next;
    this.root.head = tmpList;
    this.root.length--;
};

LList.prototype.toString = function () {
    if (arguments.length > 0) return false;
    let tmpString = '';
    let tmpNoda = this.root.head;
    while (tmpNoda.next !== this.root) {
        tmpString += tmpNoda.data + ',';
        tmpNoda = tmpNoda.next;
    }

    tmpString = tmpString.substring(0, tmpString.length - 1);

    return tmpString
};

LList.prototype.sort = function (compare) {
    if (compare) {
        if (typeof compare == "function") {

            for (let i = 0; i < this.root.length; i++) {

                let tmpNoda = this.root.head;
                for (let j = 0; j < this.root.length; j++) {

                    if (tmpNoda.next === null) break;
                    if (compare(tmpNoda.data, tmpNoda.next.data) > 0) {
                        let tmp = tmpNoda.data;
                        tmpNoda.data = tmpNoda.next.data;
                        tmpNoda.next.data = tmp;
                    }
                    tmpNoda = tmpNoda.next;
                }
            }
        } else {
            return false
        }
    } else {
        for (let i = 0; i < this.root.length; i++) {
            let tmpNoda = this.root.head;

            for (let j = 0; j < this.root.length; j++) {

                if (tmpNoda.next === null) break;
                if (String(tmpNoda.data) > String(tmpNoda.next.data)) {
                    let tmp = tmpNoda.data;
                    tmpNoda.data = tmpNoda.next.data;
                    tmpNoda.next.data = tmp;
                }

                tmpNoda = tmpNoda.next
            }
        }
    }
};

LList.prototype.toArrayList = function () {
    if (arguments.length > 0) return false;
    if (this.root.head === null) return false;
    let node = this.root.head;
    let tmpArray = [];
    let i = 0;
    while (node.next !== this.root) {
        tmpArray[i] = node.data;
        node = node.next;
        i++;
    }
    tmpArray[i] = node.data;

    return tmpArray;
};

LList.prototype.reverse = function () {
    let curr = this.root.head;
    let tmp;
    while (curr !== this.root) {
        tmp = curr.prev;
        curr.prev = curr.next;
        curr.next = tmp;
        curr = curr.prev;
    }
    this.root.head = tmp;
    this.root.head = this.root.tail
};

LList.prototype.map = function (MyFunction) {
    if (typeof MyFunction != "function") return this;
    const newList = new LinkedList();
    let Noda = this.root;
    let i = 0;
    while (Noda.next) {
        Noda = Noda.next;
        newList.push(MyFunction(Noda.el, i, LinkedList));
        i++;
    }
    return newList;
};

LList.prototype.reduce = function (MyFunction, initValue) {
    if (typeof MyFunction != "function") return 0;
    let result = 0;
    if (initValue) result = initValue;
    let Noda = this.root;
    let i = 0;
    while (Noda.next && Noda.next != null) {
        Noda = Noda.next;
        result = MyFunction(result, Noda.el, i, LinkedList)
        i++;
    }
    return result;
};
