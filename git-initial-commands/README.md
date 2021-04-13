# Comandos iniciais para git/github

git é uma ferramenta de versionamento de código, onde você consegue realizar versões diferentes assim como volta em pontos na histório do projeto, é de grande ajuda também no trabalho em equipe utilizando o github que é onde normalmente fica hospedado os códigos e assim sendo disponibilizado para outras pessoas, dai sendo possivel contribuições em projetos open source.

<hr> <br>

## <center> Principais comando git </center>

Após realizar a instalação do git em sua máquina utilize os primeiros comandos para configurar seu usuário e email.

```
git config --global user.name (yourName)

git config --global user.email (yourEmail)

```

```
git init | inicializa um repositório vazio na pasta
```

```
git status | mostra arquivos que não estão trackeado/rastreado no repositório para que

seja adcionado a um ponto na histório
```

```
git add (nome do arquivo) / . / ou /*html | adiciona o arquivo para que seja possivel

adiciona a um ponto na história, utilizando o . ele adicionado todos os arquivos em uma única

vez, é possivel também realizar filtros como adicionar todos aquivos html ou navegar entre

pastas para adicionar determinados arquivos.
```

```
git commit -m | adicionar um ponto na história do projeto, -m é utilizado para adiciona uma mensagem ao

seu commit.
```

```
git log | Mostra as informações dos commits que ja foram feitos, mostra hash atrelado ao commit

assim como horaŕio e quem realizou o commit.
```

```
git diff | Mostra as alterações entre arquivos em novas alterações antes de realizar o git add.
```

```
git checkout | Utilizando para alternar/pular para outro local senha branch ou commit, utilizando o hash

de um commit é possivel checar como estava o projeto em um deternimado ponto da história, se utilizado

nome de uma branch você alterna entre branchs.

```

```
git branch (name) | branch são ramificações que podem ser criadas para que seja possivel realizar

alterações, features de forma separada do ramo principal que é o master/main, o comando git branch

cria esses ramos, git checkout nome da branch alterna entre branch, git checkout -b cria e ja alterna

para a branch criada, git branch -D (name) deleta a branch.
```

```
git merge | realiza a união entre código da branch atual com a branch principal (master/main),

unificando assim os commits a branch principal.
```

## <center> Principais comandos Github </center>

Uma vez criado o reposiótrio no github você pode realizar os comando a seguir para realizar a hospedagem do seu código.

<hr>

```
git remote add (name) (url) | adiciona um ponto como o github, se da um nome a esse ponto,

normalmente é o origin, e após isso a url gerada após a criação do repositório remoto,

git remote -v mostra os pontos remotos criados.
```

```
git push (name) (branch) - envia os arquivos locais para o repositório remoto, name - nome do

repositório remoto, branch - para qual branch no repositório remoto.
```

```
git clone (url) (folder) | cria um cópia de um repositório remoto utilizando uma url desse repositório,

pode indicar também para qual pasta o clone ira ser adicionado.
```

```
git pull (remote) (branch) | faz o download ( atualização) do repositório local indicando qual o

repositório remoto e para qual branch sera feito a atualização.
```

<hr>
Seguindo o tutorial do Diego Fernandes -
<br> <br>

- [_CodeQuinta #5 - Fluxo Git & Github_](https://www.youtube.com/watch?v=2T2l2rGRzXs&list=PL85ITvJ7FLoh-1TFRDe7bHzAWY4DlIRtk&index=2&ab_channel=Rocketseat)
