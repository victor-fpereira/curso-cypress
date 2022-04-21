# curso-cypress

Como iniciar o Cypress

1 - Crie um diretório para armazenar seu projeto
2 - Instale as ferramentas necessárias:
2.1 - Node.JS - Baixe a última versão estável no site https://nodejs.org/pt-br/
2.2 - Visual Studio Code - Baixe a última versão estável no site https://code.visualstudio.com/download
3 - Inicie um projeto Node no diretório escolhido com o comando: npm init -y
4 - Instale o Cypress no diretório do projeto, usando o comando: npm install cypress -D

Após a instalação

Para abrir o cypress, use o comando: npx cypress open

Adicionar novos testes

Dentro da pasta "integration", crie um arquivo de teste com a extensão "spec.js".
Isso irá criar um arquivo de testes e poderá ser visto no navegador do cypress

Importar o cypress

Em todos os arquivos de cypress, é necessário fazer o import do cypress, usando a seguinte instrução: /// <reference types="cypress" />
É a primeira linha do arquivo que deve ser escrita.