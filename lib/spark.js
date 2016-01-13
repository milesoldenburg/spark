function Spark(_accessToken){
    this.accessToken = _accessToken;
}

Spark.prototype.test = function(){
    console.log('hello, world');
};

module.exports = Spark;
