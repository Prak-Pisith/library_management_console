import { ItemType, LibraryItem, LibraryUser } from "./interfaces";
import { ItemFactory } from "./item-factory";
import { LibraryCatalog } from "./library-cataglog";
import { UserDatabase } from "./library-user";
import { UserObserver } from "./user-observer";

// Define Main Components
const catalog: LibraryCatalog = LibraryCatalog.getInstance();
const userDb: UserDatabase = UserDatabase.getInstance();
const itemFactory: ItemFactory = new ItemFactory();


// Create item objects
const hpBook1: LibraryItem = itemFactory.createItem(1, 'Harry Potter Book part.1', ItemType.BOOK);
const dpBook1ed: LibraryItem = itemFactory.createItem(2, 'Design Patterns 1st Edition', ItemType.BOOK);
const tjDvd1: LibraryItem = itemFactory.createItem(3, 'Tom and Jerry part.1', ItemType.DVD);
const khmerPost: LibraryItem = itemFactory.createItem(4, 'Khmer Post Magazine', ItemType.MAGAZINE);

// Create user objects
const david: LibraryUser = {id: 1, name: 'David'};
const lisa: LibraryUser = {id: 2, name: 'Lisa'};

// 
catalog.addItem(hpBook1);
catalog.addItem(dpBook1ed);
catalog.addItem(tjDvd1);
catalog.addItem(khmerPost);

userDb.addUser(david);
userDb.addUser(lisa);

// Observer
catalog.addObserver(new UserObserver(david.id));
catalog.addObserver(new UserObserver(lisa.id));

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
  } else {
    console.log('Item not available or user not found.');
  }
} else {
  console.log('User not found.');
}

console.log(`Catalog: ${catalog.findAll()}`);
console.log(`Catelog items available: ${catalog.availableCount()}`);

// Add new items to the catalog - observers
const onePiecesManga: LibraryItem = itemFactory.createItem(5, 'One Piece', ItemType.BOOK);

catalog.addItem(onePiecesManga);