<div align="center">
<h1> 🍿 LuppoTW Movies 🍿 </h1>
</div>
  
<p>
  Olá!! Esse é um projeto FullStack que criei, um site de filmes e séries feito em cima da API do TMDB.
  <br />
  Nele o usuário poderá se cadastrar para assistir os trailers dos conteúdos presentes na API, caso
  o usuário perca sua senha ou deseje trocar ele poderá fazer isso via um email com código de verificação
</p>
<br>

<p>💻 As tecnologias usadas no projeto foram:
<p>
<br> - TypeScript
<br> - CSS
<br> - HTML
<br> - React.js
<br> - React Router DOM
<br> - React Icons
<br> - Node.js
<br> - Express
<br> - Axios
<br> - Cors
<br> - MongoDB
<br> - Mongoose
<br> - Bcryptjs
<br> - yup
<br> - Nodemailer
<br> - Ts-node-dev
<br> - eslint
<br> - dotenv
<br> - Tsup
<br> - react-youtube
</p>

<br><br>

<h2>Links</h2>
<p>
  <strong>🚀 Link do Projeto: https://luppotw-movies-wxm4.onrender.com</strong>
</p>
<p>
  <strong>🎬 Link do vídeo mostrando o projeto:</strong>
</p>
<p>
  <strong>🖥️ Link do Postman:</strong>
</p>
<p>
  <strong>🔒 Link do repositório da API do projeto: https://github.com/FernandoLuppo/movie-api</strong>
</p>

<h2>Overview</h2>
<p>
  Sobre o projeto, ele foi feito em cima da API do TMDB e o layout da Página Home baseado na Netflix, nele você precisará criar uma 
  conta para acessar a Página Home e a Página de Vídeo, as senhas são criptografadas para a segurança do usuário e todos os inputs tem validações, 
  caso o usuário não as atende irá aparecer uma caixa o informando seu erro para corrigi-lo, caso o próprio perca a senha ou deseje 
  mudá la, ele poderá fazer isso através do E-mail, os servidores tanto do MongoDB quanto o Render estão hospedados em Oregon (US West), 
  como o meu servidor MongoDB é gratuito existe um certo limite de acesso que ele pode suportar,  então caso não esteja conseguindo criar 
  sua conta utilize a conta de teste passada na Página Login, com ela você ainda terá acesso  a Página Home e a Página do filme/série que você escolher.
</p>

<h2>Como usar</h2>
<p>
  Caso queira fazer um clone dessa aplicação, primeiramente instale as dependências tanto do <strong>"client"</strong> quanto do 
  <strong>"server"</strong> com npm install em suas respectivas pastas, após, é necessário colocar suas <strong>variáveis de ambiente</strong>
  para o projeto funcionar, após isso é necessário abrir dois terminais.
</p>
<p>
  No primeiro terminal, na pasta <strong>"server"</strong> utilize o comando: <strong>npm run start:dev</strong> para inicializar o servidor.
</p>
<p>
  No segundo terminal, na pasta <strong>client</strong> utilize o comando <strong>npm start</strong> para inicializar o React.
</p>

<h2>Página Home</h2>
<p>
  Na Página Home já ao carregar, o filme de exibição é gerado aleatoriamente da categoria "Em Alta", os demais filmes e séries são divididos
  por categorias, além desse filtro, o usuário poderá procurar por um filme específico no searchbar que fica no header, lá também o 
  usuário poderá deslogar a qualquer momento que quiser, após escolher um filme o usuário é levado para a página Watch.
</p>
<img src=https://user-images.githubusercontent.com/95176596/222930476-31c3b3bb-f2d8-47eb-948d-9227403e7d1d.png />
<img src=https://user-images.githubusercontent.com/95176596/222930498-0657c648-308e-4d60-96ea-fe6bb0ff4b37.png />

<h2>Página Watch</h2>
<p>
  Na Página Watch o usuário irá conseguir ver o trailer do filme/série que ele escolheu, mais abaixo do filme tem seu resumo, nota e data de lançamento,
  abaixo do resumo do o usuário irá se depara com alguns filmes recomendados para ele caso ele queria continuar assistindo após terminar seu filme,
  ele também terá acesso ao header com a searchbar o botão pra deslogar e a logo que leva de volta para a Página Home.
</p>
<img src=https://user-images.githubusercontent.com/95176596/222930679-20a6f3e2-f59b-4674-888f-1c8f872b89f8.png />
<img src=https://user-images.githubusercontent.com/95176596/222930702-6910ece3-5c9a-46f7-8950-f91f4fc7f6d3.png />

<h2>Página Login</h2>
<p>
  Na Página de Login o usuário conseguirá entrar no projeto além de escolher ir para a página de registro caso não tenha criado
  uma conta, ou ir a página de recuperar senha caso o próprio tenha esquecido sua senha ou deseje mudá-la.
</p>
<img src=https://user-images.githubusercontent.com/95176596/222930782-287bcbb7-c54f-432f-9b1f-a8fea07422d0.png />

<h2>Página Register</h2>
<p>
  A página Register é onde o usuário irá se registrar, ele deve colocar seu nome, email e senha, a senha é criptografada, em caso de perda
  ele deverá fazer a requisição para alterar sua senha.
</p>
<img src=https://user-images.githubusercontent.com/95176596/222930877-80fa2076-857d-4601-b12e-a324c869ff7b.png />

<h2>Página Recover Password</h2>
<p>
  Essa é uma página simples que cumpre seu objetivo, o usuário que deseja uma nova senha irá preencher o input com seu e-mail, um dos requisitos
  é que o usuário já tenha se cadastrado, ao terminar de preencher o usuário irá receber um código em seu e-mail que lhe dará acesso a sua
  troca de senha, esse código tem um tempo de 5 minutos para expirar, após isso ele não tem mais validade, e o usuário deverá fazer outra
  requisição.
</p>
<img src=https://user-images.githubusercontent.com/95176596/222931240-bd3129b2-beaf-458e-89e8-4620479a21c1.png />
<img src=https://user-images.githubusercontent.com/95176596/222931257-a709c13e-2664-4bd9-90f9-bcd365b6ff9f.png />
<img src=https://user-images.githubusercontent.com/95176596/222931270-c532c203-7b97-47c7-9a26-b6c00a6dc2b9.png />

<h2>Página New Password</h2>
<p>
  Nesta página o usuário irá colocar sua nova senha, após isso ela será mudada.
</p>
<img src=https://user-images.githubusercontent.com/95176596/222931306-9516f609-ef63-4db7-942f-672a169292aa.png />

<h2>No Mobile</h2>
<div align="center">
  <img src=https://user-images.githubusercontent.com/95176596/222931458-0afe411f-d4d8-411e-8a74-8a1bd24b9088.gif />
  <img src=https://user-images.githubusercontent.com/95176596/222931511-e762baf7-0c90-4959-844e-db526ef18b36.gif />
  <img src=https://user-images.githubusercontent.com/95176596/222931639-d593a130-b6dd-4841-b2c4-3b70868623f0.gif />
</div>
