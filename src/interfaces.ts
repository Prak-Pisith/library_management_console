export enum ItemType {
  BOOK = 'Book',
  DVD = 'DVD',
  MAGAZINE = 'Magazine',
}

export interface LibraryItem {
  id: number;
  title: string;
  type: ItemType;
  available: boolean;
}

export interface LibraryUser {
  id: number;
  name: string;
}