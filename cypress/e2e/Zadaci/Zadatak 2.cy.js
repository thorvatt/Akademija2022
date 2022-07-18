describe("Zadatak 2 - Provjera URL", ()=> {
    it("Provjerava i otvara URL", ()=>{
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        cy.url().should("contain", "Main_Page");
        cy.contains("About Wikipedia").click();
        cy.get("a[title='Learn about Wikipedia and how it works'").click();
        cy.url().should("contain", "Wikipedia:About");
        cy.url().should("not.contain", "Main_Page");
    })
})