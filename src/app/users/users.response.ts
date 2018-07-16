import { User } from './user';
import { Token } from '../auth/token';

export interface GetUserResponse extends User {

}

export interface CreateUserResponse extends Token {

}

export interface UpdateUserResponse extends User {

}

export interface DestroyUserRequest {
  success: boolean;
}
