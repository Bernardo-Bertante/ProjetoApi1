# Projeto: Cadastro de Clientes (Loja de Ração Simples)

- Um projeto no qual minha motivação para cria-lô foi o desafio de trilhas Back Frontend do PS de Trainees da CompJR

# Introdução ao Projeto:

- Esse projeto envolve a criação de uma API com CRUD completo. O intruito é que o usuário tenha acesso a 3 páginas: a inicial, acessada pela rota "/", nessa aba são encontrados apenas os nomes dos clientes já cadastrados, acesso para a aba de novos cadastros e a visualização individual de cada usuário!

- A 2 aba consiste no preenchimento de dados para o cadastro de um novo cliente, cada campo exceto o débito possui algum tipo de verificação (rota "/register")!

- Já a última aba confere acesso a todas as informações de um indivíduo individualmente, podendo retornar a página principal por meio de um clieque na logo que está na Nav, editar por meio de um clique no icon de caneta, e excluir o cliente por meio do icon de lixeira (rota "/visualiser")!

# Como Rodar?

Em uma IDE, como o VSCOde, abra os arquivos projeto e o terminal do index.js! Logo, digite npm init -y depois disso npm install nodemon express mongoose ejs dotenv depois disso, vá até o arquivo de nome: package.json na parte de scripts, adcione mais um: "start": "nodemon ./index.js localhost 3000" exatamente assim! Lembre também que o arquivo: .env.example contém o necessário para você se conectar com SUA senha ao seu banco de dados! Crie um file: .env cole lá sua BD_URI = ! Por fim, no terminal, rode o comando npm start e abra em um navegador o localhost:3000 !Tá pronto o sorvetinho!

# Tecnologias usadas:

- Node.js
- Express
- MongoDB (Banco de Dados/Mongoose)
- EJS
- Dotenv?

# Créditos

- Deus
- Minha namorada
- Thiago
- Matheus
