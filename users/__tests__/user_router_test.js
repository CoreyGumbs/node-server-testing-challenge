const request = require('supertest');
const server = require('../../server');

describe('user router check', () => {
    it("tests are running", () =>{
        expect(true).toBe(true);
    });
    
    describe("user router: /api/user/ | GET /", () => {
        it("should return 200 OK", () => {
            return request(server).get('/api/users')
             .then(res => {
                 expect(res.status).toBe(200);    
             });
         });
    
         it("should return json", () => {
            return request(server)
            .get('/api/users')
            .then(res => {
                expect(res.body.message).toBe('users router working');
            });
        });

        it("should return JSON formatted body", async function(){
            const res = await request('server').get('/api/users')

            expect(res.type).toBe('text/html');
        });
    })
});

