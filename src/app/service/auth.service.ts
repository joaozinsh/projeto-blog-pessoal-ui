import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://apiblogpessoaljg.herokuapp.com/usuarios/login', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://apiblogpessoaljg.herokuapp.com/usuarios/cadastrar', user)
  }

  getByIdUser(id: number): Observable<Usuario> {
    let params = new HttpParams()
      .set('id', id)

      console.log(environment.token)
      console.log(this.token)
    return this.http.get<Usuario>(`https://apiblogpessoaljg.herokuapp.com/usuarios/buscar-id?${params}`, this.token)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != "") {
      ok = true
    }

    return ok
  }
}
