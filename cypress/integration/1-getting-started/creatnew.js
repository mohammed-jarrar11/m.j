describe('Create and mark-unmark as favorite', function () {
    it('Sign in', function () {
        cy.visit('https://www.amazon.com/b/?_encoding=UTF8&node=16225007011&pf_rd_r=WR33PTN3SZ6P6CXYX3VP&pf_rd_p=fd5b8b68-04e1-4072-9ad7-e8e24fc19a34&pd_rd_r=d6caa53a-fb26-4754-961b-2b20b4d599bc&pd_rd_w=OCeLe&pd_rd_wg=Vildt&ref_=pd_gw_unk')
        cy.contains('Sign in').click()
        cy.get('a[id="createAccountSubmit"]').click()
        cy.get('input[id="ap_customer_name"]').type('mhmd jarrar2')
        cy.get('input[type="email"]').type('test.jarrar2021@gmail.com')
        cy.get('input[id="ap_password"]').type('1234@1234')
        cy.get('input[id="ap_password_check"]').type('1234@1234')
        cy.get('input[id="continue"]').click()


        
    })
})