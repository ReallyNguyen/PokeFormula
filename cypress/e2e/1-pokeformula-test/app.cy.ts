context('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should contain title', () => {
        cy.title().should('eq', 'PokeFormula')
    })

    it('should contain an image on the page', () => {
        cy.get('img').should('exist')
    })

    it('should navigate to other pages', () => {

        cy.get('a[href*="battle"]').click();

        cy.get('a[href*="dex"]').click();

    })


    it('should contain a header on the page', () => {
        cy.get('header').should('exist')
    })

    it('should contain a footer on the page', () => {
        cy.get('footer').should('exist')
    })

})
