/// <reference path="../typings/angularjs/angular.d.ts" />
var starter;
(function (starter) {
    var Item = (function () {
        function Item(id, desc) {
            this.id = id;
            this.desc = desc;
        }
        return Item;
    })();
    starter.Item = Item;

    var ItemsSvc = (function () {
        function ItemsSvc() {
            this.items = [
                new Item(1, 'one'),
                new Item(2, 'two'),
                new Item(3, 'three')
            ];
        }
        ItemsSvc.prototype.all = function () {
            return this.items;
        };
        ItemsSvc.prototype.find = function (id) {
            return this.items[id - 1];
        };
        return ItemsSvc;
    })();
    starter.ItemsSvc = ItemsSvc;
})(starter || (starter = {}));
angular.module('starter.services', []).service('itemsSvc', function () {
    return new starter.ItemsSvc();
});
//# sourceMappingURL=services.js.map
