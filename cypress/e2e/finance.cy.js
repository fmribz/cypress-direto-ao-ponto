//agrupa o cenário de testes
describe('Transações', () => {

    //hooks são trechos de código para executar antes ou depois
    //de cada teste ou de todos
    //before: executa uma vez ANTES de todos os testes
    //after: executa uma vez DEPOIS de todos os testes
    //beforeEach:  executa uma vez ANTES de cada teste
    //afterEach:  executa uma vez ANTES de cada teste
    beforeEach(() => {
        //visita a url a ser testada
        cy.visit('https://devfinance-agilizei.netlify.app/');
    });

    //cada caso de teste
    it('Cadastrar uma entrada', () => {
        //realiza a função criarTransacao
        criarTransacao('Barra', 20);

        //realização asserts
        //recomendado ver a documentação em cypress.io
        cy.get('.description').should('have.text', 'Barra');
        //cy.get('.income').should('have.text', 'R$ 20,00');
        cy.get('.date').should('have.text','09/06/2024');
    });

    it('Cadastrar uma saída', () => {
        //realiza a função criarTransacao
        criarTransacao('Barra', -15);

        //realização asserts
        //recomendado ver a documentação em cypress.io
        cy.get('.description').should('have.text', 'Barra');
        //cy.get('.income').should('have.text', 'R$ 20,00');
        cy.get('.date').should('have.text','09/06/2024');
    });

    it('Excluir uma transação', () => {
        criarTransacao('Cos', 25);
        criarTransacao('Barra', 20);
        //pega o pai do elemento que contenha os valores descritos
        //e encontra o que for desejado
        cy.contains('.description', 'Barra')
          .parent()
          .find('img')
          .click();

        cy.get('tbody tr').should('have.length', 1);
    });
});

function criarTransacao(descricao, valor){
    //seleciona um elemento que contenha um texto específico e clica nele
    cy.contains('Nova Transação').click();
    //seleção feita pelo "alvo" do cypress, 'type' insere um texto nesse elemento
    cy.get('#description').type(descricao);
    //seleção feita pelo "alvo" do cypress, 'type' insere um texto nesse elemento
    cy.get('#amount').type(valor);
    //seleção feita pelo "alvo" do cypress, 'type' insere um texto nesse elemento
    cy.get('#date').type('2024-06-09');
    //seleciona um elemento e clica nele
    cy.get('button').click();
}