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
    
    it('POST /api/auth/signup test case normal signup', function(done){
        request(app)
        .post('/api/auth/signup')
        .send({
            username: 'admin',
            password: 'P@ssw0rd'
        })
        .expect(200)
        .end((err, res)=> {
            if(err){
                done(err);
            }else{
                assert.equal(res.body.status,'success');
                done();
            }
        });
    });

    it('POST /api/auth/signin test case normal signin', function(done){
        request.agent(app)
        .post('/api/auth/signin')
        .send({
            username: 'admin',
            password: 'P@ssw0rd'
        })
        .expect(200)
        .end((err, res)=> {
            if(err){
                done(err);
            }else{
                assert.equal(res.body.status,'success');
                done();
            }
        });
    });
});