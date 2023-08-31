import { LibraryItem } from "./interfaces";
import { Observer, ObserverSubject } from "./observer";

// Singleton
export class LibraryCatalog implements ObserverSubject {
  // Singleton instance
  private static instance: LibraryCatalog | null = null;

  // Observers
  private observers: Observer[] = [];

  // Item list
  private items: LibraryItem[] = [];

  private constructor() {}

  static getInstance(): LibraryCatalog {
    if (!LibraryCatalog.instance) {
      LibraryCatalog.instance = new LibraryCatalog();
    }
    return LibraryCatalog.instance;
  }

  // Observer subjects
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(item: LibraryItem): void {
    const itemInfo = `${item.type}-${item.title}`;
    this.observers.forEach(observer => observer.updateObserver(itemInfo));
  }

  // =================================================================

  addItem(item: LibraryItem): void {
    this.items.push(item);
    // notify users
    this.notifyObservers(item);
  }

  findItemById(id: number): LibraryItem | undefined {
    return this.items.find(item => item.id === id);
  }

  findAll(): string[] {
    return this.items.map(item => item.title);
  }

  availableCount(): number {
    return this.items.filter(item => item.available).length;
  }
}