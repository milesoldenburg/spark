var expect = require('chai').expect;
var CiscoSparkAPI = require('../lib/spark.js');
var CiscoSpark;

before(function(done){
    CiscoSpark = new CiscoSparkAPI('NDc4MmQyMGQtYWRiYi00NjJkLTkyOWMtNTMwMDY0MjYyNTNiNWMxYTI0OTMtMWZk');
    done();
});

describe('People', function(){

    it('List People', function(done){
        CiscoSpark.listPeople({
            'email' : 'moldenbu@cisco.com'
        }).then(function(res){
            expect(res.statusCode).to.equal(200);
            done();
        }).catch(function(err){
            done(err);
        });
    });

    var myId;

    it('Get My Details', function(done){
        CiscoSpark.getMyDetails().then(function(res){
            expect(res.statusCode).to.equal(200);
            myId = res.body.id;
            done();
        }).catch(function(err){
            done(err);
        });
    });

    it('Get Person Details', function(done){
        CiscoSpark.getPersonDetails(myId).then(function(res){
            expect(res.statusCode).to.equal(200);
            done();
        }).catch(function(err){
            done(err);
        });
    });

});
