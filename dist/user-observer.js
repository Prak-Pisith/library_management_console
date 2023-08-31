"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserObserver = void 0;
class UserObserver {
    constructor(userId) {
        this.userId = userId;
    }
    updateObserver(item) {
        console.log(`User ${this.userId} received a notification: New item added --- ${item}`);
    }
}
exports.UserObserver = UserObserver;
