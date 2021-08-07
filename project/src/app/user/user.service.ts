import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL = 'http://localhost:5000/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  register(data: { username: string; email: string; password: string }) {
    return this.http.post(URL + '/register', data);
 }

 login(data:{ username: string, password: string}) {
   return this.http.post(URL + '/login', data);

 }

 logout(){
   this.http.get(URL + '/logout', {})
   localStorage.clear();
 }

}
