const request = require('supertest');
const assert = require('assert');
const mongoose = require('../src/config/mongoose');
const app = require('../src/app');

describe('CRUD test',function(){
    beforeEach(function(done){
        mongoose.connect(done);
    });
    afterEach(function(done){
        mongoose.disconnect(done);
    });
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