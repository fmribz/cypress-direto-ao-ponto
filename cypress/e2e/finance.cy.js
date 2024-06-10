//agrupa o cenário de testes
describe('Transações', () => {
    //cada caso de teste
    it('Cadastrar uma entrada', () => {
        //visita a url a ser testada
        cy.visit('https://devfinance-agilizei.netlify.app/');
        //seleciona um elemento que contenha um texto específico e clica nele
        cy.contains('Nova Transação').click();
        //seleção feita pelo "alvo" do cypress, 'type' insere um texto nesse elemento
        cy.get('#description').type('Barra');
        //seleção feita pelo "alvo" do cypress, 'type' insere um texto nesse elemento
        cy.get('#amount').type(20.00);
        //seleção feita pelo "alvo" do cypress, 'type' insere um texto nesse elemento
        cy.get('#date').type('2024-06-09');
        //seleciona um elemento e clica nele
        cy.get('button').click();

        //realização asserts
        //recomendado ver a documentação em cypress.io
        cy.get('.description').should('have.text', 'Barra');
        //cy.get('.income').should('have.text', 'R$ 20,00');
        cy.get('.date').should('have.text','09/06/2024');
    });
});