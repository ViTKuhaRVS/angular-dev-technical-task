export interface UserDto {
  id?: number;
  name: string;
  email: string;
  password?: string;
}

export interface UserResponse {
  accessToken: string;
  user: UserDto;
}
