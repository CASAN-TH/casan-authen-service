const request = require('supertest');
const assert = require('assert');
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
        .end(function(err, res){
            var result = res.body;
            assert.equal(result.status, 'success');
            done();
        });
    })
});