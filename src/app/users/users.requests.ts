export interface GetUserRequest {
  id: number;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface UpdateUserRequest {
  id: number;
  user: Partial<CreateUserRequest>
}

export interface DestroyUserRequest {
  id: number;
}
