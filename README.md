Linguagem: HTML5, CSS e JavaScript
Bibliotecas: JQuery, Slick

Comandos GIT:

git add. = adicionar arquivos modificados
git commit -m "" = descrever mudanças
git push = Enviar para o repositório git

git checkout -b = comando para criar nova branch (nome da branch vem depois de -b)
git checkout = escolher a branch que irá usar (colocar o nome depois de checkout) 

--------------------------------------------------------------------------

Instalar NPM:

- npm init (cria o arquivo package.json)
- npm install -D live-server (Cria um pequeno servidor no projeto)

[V] cria arquivo .gitignore
dentro do aarquivo, digitar a pasta:
- node_modules/

Configurar comando LIVE-SERVER:

Dentro do arquivo package.json, colocar o comando no "scripts":
- "start": "npx live-server src/" 

Comando para abrir a página no navegador:
-npm run start ou npm start