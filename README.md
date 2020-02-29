## Projeto Teste Fron-End Quero Educação - (Parte do Front)

Projeto para realização do Teste de Front-end da Quero Educação.
Todo o projeto levou em torno de 22 horas divididos entre 2 semanas.

Front-URL: (https://teste-front-end-quero.herokuapp.com/)

Foi criado também uma API Backend para servir com os dados do Projeto.


### Deploy Realizado no Heroku


### Para iniciar o projeto local com `yarn start` ou `npm start`

Para iniciar a Aplicação React é necessário o Node instalado na máquina, em conjunto com o NPM ou YARN 
Após isso será necessário clonar o repositório, e depois de clonado, deve ser iniciado pelos seguintes SCRIPTS: `yarn start` ou `npm start`

Depois de iniciado o projeto pelo Terminal, o projeto pode ser acessado pela URL: (http://localhost:3000/)

### Estrutura do projeto
```
C:.
├───Assets
│   └───images
├───Components
│   ├───Containers
│   │   ├───Footer
│   │   ├───Header
│   │   ├───MainContent
│   │   └───Modal
│   └───Elements
│       ├───Breakpoints
│       ├───Button
│       ├───Card
│       ├───Colors
│       ├───Input
│       ├───List
│       └───Select
├───Redux
│   ├───Actions
│   ├───Reducers
│   └───Store
└───Style
    └───Font
        └───Proxima_Nova
```
### Principais ferramentas Utilizadas

- React
- Sass
- Node: API para o Backend

### Patterns adotados:

- Estilo:
-- Mobile first
-- BEM (Block Element Modifier)
-- SCSS
-- Criação de uma base de Componentes(mini design system) - `Components\Elements\`

- React:
-- Redux (Single source of Truth)
-- React Class Components para Containers e React Functional Dumb Components
-- State-full Components
-- ES6 

### Temas do Projeto:

O projeto possuí dois temas, o clássico pedido pelo teste da Quero, e um baseado no novo Brand da Quero Educação.
O tempo pode ser alterado no Arquivo `Colors.scss` da Pasta `Elements/Colors/`, trocando-se `$theme: $colorsNew;` por `$theme: $colorsOld;`.

### Controle de dados:

O controle dos dados da Página foram realizados em conjunto com o Redux que cria uma single source of truth na aplicação, centralizando os principais estados dos componentes da aplicação.
