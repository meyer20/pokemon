# Pokemon

## Instalação e execução

Primeiramente, executar o comando `npm i` para realizar o download das dependências do projeto, após isso, executar o comando `npm start-server` para subir o servidor da aplicação no endereço `http://localhost:4200/`.

Para execução dos testes, após instalar as dependências, executar o comando `npm run build` e depois ´npm run test´ ou `npm run test:coverage` para obter a cobertura de testes.

Ou, o projeto pode ser acessado através do link: https://meyer-pokemon.herokuapp.com/

## Dependências utilizadas

* Bootstrap 4
* Angular Material
* Express (Para utilização no Heroku)
* ngx-infinite-scroll (Scroll infinito na listagem de Pokemons)
* angular-responsive-carousel (Exibição das imagens do Pokemon na tela de perfil)

## Demais considerações

* Problema encontrado na execução do teste do componente de lista de Pokemons (pokemon-list), o componente de scroll infinite está quebrando a execução do teste. Issue relatada: https://github.com/orizens/ngx-infinite-scroll/issues/380
  

## Pendências

* Desenvolvimento dos testes;
* Ajuste na exibição dos cards (Porém no mobile está correto).
  Está sendo exibido:

      1 4 7
      2 5 8
      3 6 9

Deveria ser exibido:

    1 2 3
    4 5 6
    7 8 9 
-----------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
