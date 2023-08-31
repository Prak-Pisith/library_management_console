import { LibraryUser } from "./interfaces";

// Singleton
export class UserDatabase {

  private static instance: UserDatabase | null = null;

  private users: LibraryUser[] = [];

  private constructor() {}

  static getInstance(): UserDatabase {
    if (!UserDatabase.instance) {
      UserDatabase.instance = new UserDatabase();
    }
    return UserDatabase.instance;
  }

  addUser(user: LibraryUser): void {
    this.users.push(user);
  }

  findUserById(id: number): LibraryUser | undefined {
    return this.users.find(user => user.id === id);
  }

  findAll(): string[] {
    return this.users.map(user => user.name);
  }
}