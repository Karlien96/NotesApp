import { User } from './users';

export interface Note {
    note: string;
    id: number;
    user: User;
}