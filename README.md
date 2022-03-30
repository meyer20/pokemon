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

## Demais considerações

* Problema encontrado na execução do teste do componente de lista de Pokemons (pokemon-list), o componente de scroll infinite está quebrando a execução do teste. Issue relatada: https://github.com/orizens/ngx-infinite-scroll/issues/380
  

## Pendências

* Desenvolvimento dos testes;

-----------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.1.

## Development server

Run `ng serve` or `npm run start-server` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

_`npm run start` is reserved for Heroku use._

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running tests

Run `npm run test` to execute the unit tests via Jest.

## Running test coverage

Run `npm run test:coverage` to execute the unit tests via Jest.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
