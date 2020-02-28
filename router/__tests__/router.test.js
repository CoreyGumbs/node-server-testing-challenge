const request = require('supertest');
const server = require('../../server');


describe("router check", () => {
    it("should run tests", () =>{
        expect(true).toBe(true);
    });
});

describe("route: /api/ | GET /", () => {
    it("should return 200 OK", () => {
       return request(server).get('/api')
        .then(res => {
            expect(res.status).toBe(200);    
        });
    });
});