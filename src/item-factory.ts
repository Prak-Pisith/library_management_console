import { ItemType, LibraryItem } from "./interfaces";

// Factory
export class ItemFactory {
  createItem(id: number, title: string, type: ItemType): LibraryItem {
    return {id, title, type, available: true};
  }
}