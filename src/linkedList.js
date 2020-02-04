function List () {}

List.prototype.pop = function () {};
List.prototype.map = function () {};
List.prototype.push = function () {};
List.prototype.sort = function () {};
List.prototype.size = function () {};
List.prototype.shift = function () {};
List.prototype.reduce = function () {};
List.prototype.reverse = function () {};
List.prototype.unshift = function () {};
List.prototype.toString = function () {};
List.prototype.clearList = function () {};

LList.prototype = Object.create(List.prototype);
const lList = new LList();
