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

describe('Rooms', function(){

    it('List Rooms', function(done){
        CiscoSpark.listRooms().then(function(res){
            expect(res.statusCode).to.equal(200);
            done();
        }).catch(function(err){
            done(err);
        });
    });

    var id;

    it('Create a Room', function(done){
        CiscoSpark.createRoom({
            'title' : 'Test Room'
        }).then(function(res){
            expect(res.statusCode).to.equal(200);
            id = res.body.id;
            done();
        }).catch(function(err){
            done(err);
        });
    });

    it('Get Room Details', function(done){
        CiscoSpark.getRoomDetails(id).then(function(res){
            expect(res.statusCode).to.equal(200);
            done();
        }).catch(function(err){
            done(err);
        });
    });

    it('Update a Room', function(done){
        CiscoSpark.updateRoom(id, {
            'title' : 'Updated Test Room'
        }).then(function(res){
            expect(res.statusCode).to.equal(200);
            done();
        }).catch(function(err){
            done(err);
        });
    });

    it('Delete a Room', function(done){
        CiscoSpark.deleteRoom(id).then(function(res){
            expect(res.statusCode).to.equal(204);
            done();
        }).catch(function(err){
            done(err);
        });
    });

});
