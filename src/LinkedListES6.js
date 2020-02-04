class List {
    constructor(){
        this.push =  () => {};
        this.pop = () => {};
        this.unshift = () => {};
        this.shift = () => {};
        this.sort = () => {};
        this.size = () => {};
        this.toString = () => {};
        this.clearList = () => {};
    }
}


class LList extends List {
    root = {
        head: null,
        tail: null,
        length: 0,
    };
    clearList = () =>{
        this.root = {
            head: null,
            tail: null,
            length: 0,
        }
    };
    createNode = (el) => {
        return {
            data: el ? el : null,
            prev : null,
            next: null,
        };
    };
    size = () => {
        return this.root.length;
    };
    push = (el) => {
        let node =  this.createNode(el);

        if(!this.root.head){
            this.root.head = node;
            this.root.tail = node;
        }else{
            node.prev = this.root.tail;
            this.root.tail.next = node;
            this.root.tail = node;
            node.next = this.root;
        }
        this.root.length++;
    };

    pop = () => {
        this.root.tail.prev.next = this.root;
        this.root.length--;
        return this.root.tail.data;
    };
    unshift = (el) => {
        let node = this.createNode(el);

        if(!this.root.head){
            this.root.head = node;
            this.root.tail = node;
        }else{
            node.prev = this.root;
            this.root.head.prev = node;
            node.next = this.root.head;
            this.root.head = node;
            this.root.tail.next = this.root;
        }
        this.root.length++
    };

    shift = () => {
        if(this.root.head === null) return false;
        let tmpList = this.root.head.next;
        this.root.head = tmpList;
        this.root.length--;
    };

    toString = () => {
        let tmpString = '';
        let tmpNoda = this.root.head;
        while(tmpNoda.next !== this.root){
            tmpString += tmpNoda.data + ',';
            tmpNoda = tmpNoda.next;
        }

        tmpString = tmpString.substring(0, tmpString.length - 1);

        return tmpString
    };



    sort = (compare) => {
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
            }
            else {
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

    toArrayList = () => {
        if(this.root.head === null) return false;
        let node = this.root.head;
        let tmpArray = [];
        let i = 0;
        while(node.next != this.root){
            tmpArray[i] = node.data;
            node = node.next;
            i++;
        }

        return tmpArray;
    };
};
const lList = new LList();