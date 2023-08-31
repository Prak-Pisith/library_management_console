import { LibraryItem } from "./interfaces";

export interface Observer {
  updateObserver(item: string): void;
}

export interface ObserverSubject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(item: LibraryItem): void;
}