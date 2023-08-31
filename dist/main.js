"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const item_factory_1 = require("./item-factory");
const library_cataglog_1 = require("./library-cataglog");
const library_user_1 = require("./library-user");
const user_observer_1 = require("./user-observer");
// Define Main Components
const catalog = library_cataglog_1.LibraryCatalog.getInstance();
const userDb = library_user_1.UserDatabase.getInstance();
const itemFactory = new item_factory_1.ItemFactory();
// Create item objects
const hpBook1 = itemFactory.createItem(1, 'Harry Potter Book part.1', interfaces_1.ItemType.BOOK);
const dpBook1ed = itemFactory.createItem(2, 'Design Patterns 1st Edition', interfaces_1.ItemType.BOOK);
const tjDvd1 = itemFactory.createItem(3, 'Tom and Jerry part.1', interfaces_1.ItemType.DVD);
const khmerPost = itemFactory.createItem(4, 'Khmer Post Magazine', interfaces_1.ItemType.MAGAZINE);
// Create user objects
const david = { id: 1, name: 'David' };
const lisa = { id: 2, name: 'Lisa' };
// 
catalog.addItem(hpBook1);
catalog.addItem(dpBook1ed);
catalog.addItem(tjDvd1);
catalog.addItem(khmerPost);
userDb.addUser(david);
userDb.addUser(lisa);
// Observer
catalog.addObserver(new user_observer_1.UserObserver(david.id));
catalog.addObserver(new user_observer_1.UserObserver(lisa.id));
console.log(`Catalog: ${catalog.findAll()}`);
console.log(`Catelog items available: ${catalog.availableCount()}`);
console.log(`User: ${userDb.findAll()}`);
// Borrow
const user = userDb.findUserById(1);
if (user) {
    console.log(`User ${user.name} is interacting with the library:`);
    const borrowedItem = catalog.findItemById(2);
    if (borrowedItem && borrowedItem.available) {
        borrowedItem.available = false;
        console.log(`User ${user.name} borrowed ${borrowedItem.title}`);
    }
    else {
        console.log('Item not available or user not found.');
    }
}
else {
    console.log('User not found.');
}
console.log(`Catalog: ${catalog.findAll()}`);
console.log(`Catelog items available: ${catalog.availableCount()}`);
// Add new items to the catalog - observers
const onePiecesManga = itemFactory.createItem(5, 'One Piece', interfaces_1.ItemType.BOOK);
catalog.addItem(onePiecesManga);
