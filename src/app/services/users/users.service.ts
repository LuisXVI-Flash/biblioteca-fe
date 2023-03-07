import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listaUsers } from 'src/app/entities/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpoint: string = environment.be_url
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<any>(`${this.endpoint}user/list`)
  }
}
