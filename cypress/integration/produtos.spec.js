/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {

        // Lista de produtos da loja selecionando com classe
        cy.get('[class="product-block grid"]').first().click()

        // Usando outros locators pegos pelo DOM:
        // ID: cy.get('[id="product-block grid"]')
        // CSS: cy.get('[css="product-block grid"]')
        
        // Clicando o último elemento da lista
        // cy.get('[class="product-block grid"]').last().click()

        // Pegando elemento específico pelo índice
        // cy.get('[class="product-block grid"]').eq(3).click()

        // Pegando o elemento específico pelo texto
        // cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()

    })

    it('Deve selecionar um produto do carrinho', () => {

        let quantidade = 2
    
        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    });



});