"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryCatalog = void 0;
// Singleton
class LibraryCatalog {
    constructor() {
        // Observers
        this.observers = [];
        // Item list
        this.items = [];
    }
    static getInstance() {
        if (!LibraryCatalog.instance) {
            LibraryCatalog.instance = new LibraryCatalog();
        }
        return LibraryCatalog.instance;
    }
    // Observer subjects
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(item) {
        const itemInfo = `${item.type}-${item.title}`;
        this.observers.forEach(observer => observer.updateObserver(itemInfo));
    }
    // =================================================================
    addItem(item) {
        this.items.push(item);
        // notify users
        this.notifyObservers(item);
    }
    findItemById(id) {
        return this.items.find(item => item.id === id);
    }
    findAll() {
        return this.items.map(item => item.title);
    }
    availableCount() {
        return this.items.filter(item => item.available).length;
    }
}
exports.LibraryCatalog = LibraryCatalog;
// Singleton instance
LibraryCatalog.instance = null;
