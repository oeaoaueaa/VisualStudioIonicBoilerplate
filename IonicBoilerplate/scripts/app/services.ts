/// <reference path="../typings/angularjs/angular.d.ts" />

module starter {
    export class Item {
        constructor(public id: number, public desc: string){}
    }

    export class ItemsSvc {
        private items: Item[];
        constructor() {
            this.items = [
                new Item(1, 'one'),
                new Item(2, 'two'),
                new Item(3, 'three')
            ];
        }
        all() {
            return this.items;
        }
        find(id) {
            return this.items[id - 1];
        }
    }
}
angular.module('starter.services', [])
.service('itemsSvc', () => new starter.ItemsSvc())