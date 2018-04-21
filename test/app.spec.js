const request = require('supertest');
const app = require('../src/app');

describe('CRUD test',function(){
    it('POST /api/auth/signin test case normal signin', function(done){
        request(app)
        .get('/api/auth/signin')
        .send({
            username: 'admin',
            password: 'P@ssw0rd'
        })
        .expect(200)
        .expect({
            username: 'admin',
            password: 'P@ssw0rd'
        })
        .end(done);
    })
});