/// <reference types="cypress" />

export default context('Home', () => {
  it('Its login page', () => {
    cy.visit('http://localhost:3000/');
    cy.location('pathname').should('include', '/');
  });

  describe('Layout', () => {
    it('Users should see page navbar', () => {
      cy.get('[data-cy="navbar"]').should('be.visible').should('exist');
    });

    it('Users should see 4 vote cards on voting section', () => {
      cy.get('[data-cy="vote-section"] > article').should('be.visible').should('have.length', 4);
    });

    it('Users should see page footer', () => {
      cy.get('[data-cy="footer"]').should('be.visible').should('exist');
    });
  });

  describe('Actions', () => {
    it('If users votes a card, should change the vote value', () => {
      cy.get('[data-cy="vote-section"] > article:first [data-cy="vote-badge-like"]:last').click();
      cy.get('[data-cy="vote-card-footer"] span:first').should('not.contain.value', '50px');
    });
    it('If users clicks vote again, should have the oportunity of vote again', () => {
      cy.get('[data-cy="vote-section"] > article:first [data-cy="vote-badge-again"]').click();
      cy.get('[data-cy="vote-section"] > article:first [data-cy="vote-card-votes"] >').should('have.length', 3);
    });
  });
});
