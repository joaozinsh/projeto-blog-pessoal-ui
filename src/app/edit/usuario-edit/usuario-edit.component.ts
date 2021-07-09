import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  user: Usuario = new Usuario()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0, 0)

    if(environment.token == "") {
      //alert("Sua sessão expirou, faça login novamente")
      this.router.navigate(["/entrar"])
    }

    let id = this.route.snapshot.params['id']
    this.idUser = id

    this.findByIdUser()
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  findByIdUser(){
    this.usuarioService.getByIdUser(this.idUser).subscribe((resp: Usuario)=> {
      this.user = resp
      this.user.senha = ""
    })
  }

  atualizar(){
    if (this.user.senha != this.confirmarSenha) {
      alert("A senhas estão incorretas!")
    } else {
      this.usuarioService.putUser(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        this.router.navigate(["/entrar"])
        alert("Usuário alterado com sucesso, faça login novamente!")

        environment.foto = ""
        environment.id = 0
        environment.nome = ""
        environment.token = ""
      }, erro =>{
        if (erro.status == 400) {
          alert("Esse usuario já existe! Tente outro ou permaneça com o seu")
        }
      })
    }
  }

}
