import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto, UserResponse } from '../models/user.dto';

@Injectable()
export class AuthHttpService {
  constructor(private httpClient: HttpClient) {
  }

  registerUser(user: UserDto): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>('http://localhost:3000/users', user);
  }

  loginUser(user: UserDto): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>('http://localhost:3000/login', user);
  }
}
