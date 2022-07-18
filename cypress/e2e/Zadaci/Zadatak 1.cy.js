describe("Demonstrira click funkciju na Wikipediji", ()=>{
    
    it("Odrađuje klikove", ()=>{
        cy.visit("https://en.wikipedia.org/wiki/Main_Page");
        cy.contains("Contents").click();
        cy.get("a[title='Wikipedia:Contents/Technology and applied sciences']").first().click();
        cy.contains("Software").first().click();
        cy.go("back");
        cy.reload();
        cy.go(1);
        cy.go(-2);
    })
})

