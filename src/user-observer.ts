import { Observer } from "./observer";

export class UserObserver implements Observer {

  private userId: number;

  constructor(userId: number) {
    this.userId = userId;
  }

  updateObserver(item: string): void {
    console.log(`User ${this.userId} received a notification: New item added --- ${item}`);
  }
}