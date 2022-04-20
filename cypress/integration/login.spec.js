// O teste precisa ter a seguinte extensão: spec.js
// Para que o programa entenda que é um arquivo de teste

// Primeira coisa a se fazer: Importar o cypress

/// <reference types="cypress" />

// Segunda coisa: Criar um bloco de funcionalidade

context('Funcionalidade login', () => {

    // Executa antes de cada teste
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    });

    // Executa despois de cada teste
    afterEach(() => {
        cy.screenshot()
    });

    // Aqui vão ficar os testes. Cada teste ficará agrupado na funcionalidade
    
    // Teste 1
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain.text', 'Minha conta')
        

    })

    // Teste 2
    it('Deve mostrar mensagem de erro ao errar usuário', () => {
        cy.get('#username').type('aluno_ebac@teste')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: O usuário aluno_ebac@teste não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
    })

    // Teste 3
    // Para rodar exclusivamente um teste, marcar como "it.only"
    it('Deve mostrar mensagem de erro ao errar senha', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })


})