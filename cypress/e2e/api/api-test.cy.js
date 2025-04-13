// cypress/e2e/api-test.cy.js

describe('API Testing with Cypress', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    it('GET - Fetch all posts', () => {
        cy.request(`${baseUrl}/posts`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0);
        });
    });

    it('POST - Create a new post', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/posts`,
            body: {
                title: 'foo',
                body: 'bar',
                userId: 1,
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body.title).to.eq('foo');
        });
    });

    it('PUT - Update a post', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}/posts/1`,
            body: {
                id: 1,
                title: 'updated title',
                body: 'updated body',
                userId: 1,
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq('updated title');
        });
    });

    it('DELETE - Delete a post', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/posts/1`,
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});