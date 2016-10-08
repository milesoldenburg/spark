var expect = require('chai').expect;
var CiscoSparkAPI = require('../lib/spark.js');
var CiscoSpark;
var myId = 'Y2lzY29zcGFyazovL3VzL1BFT1BMRS9hNzY4NzJmOS0xNTliLTQ0MWEtYTY4Ny0xNjU3YWFjOWZjMjQ';

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

describe('Memberships', function(){

    var room = 'Y2lzY29zcGFyazovL3VzL1JPT00vN2M4NzViNTAtOGRhMy0xMWU2LWEyYjQtNjc0NDE5NzRmYzIw';
    var membership = 'Y2lzY29zcGFyazovL3VzL01FTUJFUlNISVAvYTc2ODcyZjktMTU5Yi00NDFhLWE2ODctMTY1N2FhYzlmYzI0OjdjODc1YjUwLThkYTMtMTFlNi1hMmI0LTY3NDQxOTc0ZmMyMA';

    it('List Memberships', function(done){
        CiscoSpark.listMemberships().then(function(res){
            expect(res.statusCode).to.equal(200);
            done();
        }).catch(function(err){
            done(err);
        });
    });

    it('Create Membership', function(done){
        CiscoSpark.createMembership({
            'roomId' : room,
            'personEmail' : 'moldenbu@cisco.com'
        }).then(function(){
            done(new Error());
        }).catch(function(err){
            expect(err.status).to.equal(409);
            done();
        });
    });

    it('Get Membership Details', function(done){
        CiscoSpark.getMembershipDetails(membership).then(function(res){
            expect(res.statusCode).to.equal(200);
            done();
        }).catch(function(err){
            done(err);
        });
    });

    it('Update a Membership', function(done){
        CiscoSpark.updateMembership(membership, {
            'isModerator' : true
        }).then(function(res){
            expect(res.statusCode).to.equal(200);
            done();
        }).catch(function(err){
            done(err);
        });
    });

    it('Delete a Membership', function(done){
        CiscoSpark.deleteMembership('test').then(function(){
            done(new Error());
        }).catch(function(err){
            expect(err.status).to.equal(400);
            done();
        });
    });

});
