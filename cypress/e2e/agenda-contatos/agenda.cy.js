
describe("inserir/alterar/excluir usuarios da agenda", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("testando inserindo um usuario na tarefa", () => {
        cy.get('[type="text"]').type('Leonardo')
        cy.get('[type="email"]').type("leonardo@gmail.com")
        cy.get('[type="tel"]').type("2298102932")
        cy.get('.adicionar').click()
        cy.wait(1000); // Espera por 1 segundo (ajuste o tempo conforme necessário)
        cy.screenshot(); // Tira o screenshot do estado atual da página
    })

    it("editar um usuario", () => {
        cy.get(':last-child > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Rodrigo')
        cy.get('[type="email"]').clear().type("rodrigo@gmail.com")
        cy.get('[type="tel"]').clear().type('232323232')
        cy.get('.alterar').click()
        cy.wait(1000); // Espera por 1 segundo (ajuste o tempo conforme necessário)
        cy.screenshot(); // Tira o screenshot do estado atual da página
    })

    it("testando a exclusao de um usuario", () => {
        cy.get(':last-child > .sc-gueYoa > .delete').click()
        cy.wait(1000); // Espera por 1 segundo (ajuste o tempo conforme necessário)
        cy.screenshot(); // Tira o screenshot do estado atual da página
    })

})
