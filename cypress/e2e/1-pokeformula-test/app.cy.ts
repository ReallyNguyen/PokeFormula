context('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })


    it('should contain main content', () => {
        cy.get('main').should('exist');
    });


    it('should contain a favicon', () => {
        cy.get('head').find('link[rel="shortcut icon"]').should('have.attr', 'href', './Images/logo.png');
    });


    it('should container h1', () => {
        cy.get('h1').contains('PokeFormula')
    })


    it('should contain title', () => {
        cy.title().should('eq', 'PokeFormula')
    })


    it('should contain an image on the page', () => {
        cy.get('img').should('exist')
    })


    it('should contain specific text content', () => {
        cy.contains('PokéFormula is your ultimate destination for immersive Pokémon battles and trading card collecting. Dive into a world where strategy meets fun as you build your ultimate Pokémon team.').should('exist');
        cy.contains('Currently supporting 1V1 battles with future plans to implement 3v3 and 6v6 battles, PokéFormula is the ultimate test of your pokétactics.').should('exist');
        cy.contains('Access the Pokédex or battle page to find information about any generation of Pokemon.').should('exist');
        cy.contains('Unlock Pokémon TCG cards as rewards for winning battles and watch your collection grow. With a big enough collection, you’ll be ready to pokeduke it out when we add our TCG functionality. (Planned for future release 2026)').should('exist');
    })


    it('should contain a link to the battle page in the header', () => {
        cy.get('header').find('a[href="/battle"]').should('exist');
    });


    it('should contain a link to the pokedex page in the header', () => {
        cy.get('header').find('a[href="/dex"]').should('exist');
    });




    it('should contain a header on the page', () => {
        cy.get('header').should('exist')
    })


    it('should contain a footer on the page', () => {
        cy.get('footer').should('exist')
    })
})
