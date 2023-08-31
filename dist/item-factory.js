"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemFactory = void 0;
// Factory
class ItemFactory {
    createItem(id, title, type) {
        return { id, title, type, available: true };
    }
}
exports.ItemFactory = ItemFactory;
