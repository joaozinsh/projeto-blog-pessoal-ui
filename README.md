# Blog Pessoal
https://blogpessoaljg.netlify.app

# Sobre o projeto
O blog pessoal é um projeto desenvolvido durante o bootcamp Desenvolvedor Java Web da [Generation Brasil](https://brazil.generation.org/sao-paulo/pessoa-desenvolvedora-web/)

A aplicação consiste em uma rede social tipo blog, em que se é possivel visualizar postagens de outros usuários, além de criar suas próprias.

# Imagens
<table>
  <tr>
    <td>
      <img src="https://i.imgur.com/H0nKo7z.png" title="source: imgur.com" />
    </td>
    <td>
      <img src="https://i.imgur.com/hBOgg9V.png" title="source: imgur.com" />
    </td>
  </tr>
</table>
<img src="https://i.imgur.com/GslgO8a.png" title="source: imgur.com" />

# Tecnologias utilizadas
## Back-End
GitHub da [API](https://github.com/joaozinsh/projeto-blog-pessoal)
* Java
* Spring Boot
  * Spring Web
  * Spring Boot DevTools
  * Spring Data JPA
  * PostgreSQL Driver
  * Validation
  * Spring Security
  * JUnit
* Maven
* Swagger

## Front-End
* HTML / CSS / JavaScript / TypeScript
* Angular
* Bootstrap

## Implantação em produção
* Back-End: Heroku
* Front-End: Netlify
* Banco de dados: PostgreSQL

# Como executar o projeto
## Back-End
Pré-requisitos: Java 11

```
# Clonar repositório da API
git clone https://github.com/joaozinsh/projeto-blog-pessoal

# Executar o projeto
./mvnw spring-boot:run

# O servidor inciará na porta:8080 - acesse http://localhost:8080
# Senha da documentação Swagger
  Usuario: admin
  Senha: admin
```

## Front-End
Pré-requisitos: npm / yarn

```
# Clonar repositório
git clone https://github.com/joaozinsh/projeto-blog-pessoal-ui.git

# Instalar dependências
npm install

# Executar o projeto
ng serve

A aplicação será aberta na porta:4200 - acesse http://localhost:4200
```
