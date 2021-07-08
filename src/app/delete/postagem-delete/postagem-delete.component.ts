import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPostagem: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == "") {
      //alert("Sua sessão expirou, faça login novamente")
      this.router.navigate(["/entrar"])
    }

    let id = this.route.snapshot.params['id']
    this.idPostagem = id

    this.findByIdPostagem(id)
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=> {
      this.postagem = resp
      console.log(this.postagem)
    })
  }

  apagar(){
    this.postagemService.deletePostagem(this.idPostagem).subscribe(()=> {
      alert("Postagem apagada com sucesso!")
      this.router.navigate(['/inicio'])
    })
  }
}
