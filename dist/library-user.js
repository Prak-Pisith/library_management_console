"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase = void 0;
// Singleton
class UserDatabase {
    constructor() {
        this.users = [];
    }
    static getInstance() {
        if (!UserDatabase.instance) {
            UserDatabase.instance = new UserDatabase();
        }
        return UserDatabase.instance;
    }
    addUser(user) {
        this.users.push(user);
    }
    findUserById(id) {
        return this.users.find(user => user.id === id);
    }
    findAll() {
        return this.users.map(user => user.name);
    }
}
exports.UserDatabase = UserDatabase;
UserDatabase.instance = null;
