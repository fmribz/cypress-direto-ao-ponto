# Curso cypress direto ao ponto
 Estudo do curso Cypress direto ao ponto pela plataforma Agilizei

## Pré-requisitos
* Instalar o [node.js](https://nodejs.org/en)
  - Para verificar a instalação, no seu terminal digite:
    > node -v
  - Deverá aparece a versão do node instalada.
    > v22.2.0
* Instalar um editor de código, usarei o [VSCode](https://code.visualstudio.com/)
  - Obs: recomendações de [extensões para o VSCode](https://www.youtube.com/watch?v=JGVB97ns0NQ&ab_channel=Agilizei) pelo Agiliza 

## Criando o projeto e instalando o cypress
* Crie uma pasta que será usada para o projeto.
* Pelo terminal, navegue ate o diretório desta pasta.
* Inicialize um projeto Node usando o comando:
  > npm init --yes (--yes ignora as perguntas padrão de inicialização do node)
* Instalar o cypress:
  > npm install -D cypress (instala a última versão)
  
  > nmp install -D cypress@<versão> (instala uma versão desejada)

# Abrindo o cypress e conhecendo sua estrutura
Comandos e detalhes para conhecer a estrutura do cypress.

* Abrindo o cypress
  >npx cypress open
  
  Irá abrir a janela do Cypress.

* Conhecendo os arquivos criados
  - **cypress.config.js**: Responsável pelas configurações do cypress, como URL padrão, entre outras.
  - **pasta e2e**: Pasta responsavel por armazenar os nossos testes/spec.
  - **pasta fixtures**: armazena arquivos que possuem dados ou scripts que geram dados para testes.
  - **pasta suppor**: armazena arquivos auxiliares na execução dos testes