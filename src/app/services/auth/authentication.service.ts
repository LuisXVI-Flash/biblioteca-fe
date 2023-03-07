import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject!: BehaviorSubject<any>
  public user!: Observable<any>

  endpoint: string = environment.be_url

  constructor(private http: HttpClient, private router: Router) { 
    this.userSubject = new BehaviorSubject<any>(null)
    this.userSubject.next(this.getUserData())
    this.user = this.userSubject.asObservable()
  }

  login(user: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.endpoint}login`, { data: {username: user, password: password}}
    )
  }

  logout(redirect: boolean = true) {
    localStorage.removeItem('access_token')
    if (redirect) {
      this.router.navigate(['/login'])
    }
  }

  getUserData() {
    let token = String(this.getToken())
    let array = token.split('.')
    let userData = array[1] ? JSON.parse(atob(array[1])) : null
    this.userSubject.next(userData)
  }

  getToken() {
    return localStorage.getItem('access_token')
  }

  updateToken(token: string): void {
    localStorage.setItem('access_token', token)
    
  }

  get isLogged(): boolean {
    let authToken = this.getToken()
    return (authToken != null)
  }
}
