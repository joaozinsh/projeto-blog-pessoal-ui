import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: Usuario = new Usuario()
  idUser: number = environment.id

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  
  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
    
    if(environment.token == "") {
      //alert("Sua sessão expirou, faça login novamente")
      this.router.navigate(["/entrar"])
    }

    this.findAllTemas()
    this.findAllPostagens()
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[])=> {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=> {
      this.tema = resp
    })
  }

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=> {
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.usuarioService.getByIdUser(this.idUser).subscribe((resp: Usuario)=> {
      this.user = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema

    this.user.id = this.idUser

    this.postagem.tema = this.tema
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=> {
      this.postagem = resp
      alert("Postagem publicada com sucesso!")
      this.postagem = new Postagem()
      this.findAllPostagens()
    })
  }

}
