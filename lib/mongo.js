var config = require("config-lite");
var MongoClass = require("mongoclass");
var mongoclass = new MongoClass();
mongoclass.connect(config.mongodb);

exports.User = mongoclass.model("User", {
    name: {type: "string"},
    password: {type: "string"},
    avatar: {type: "string"},
    gender: {type: "string", enum: ["m", "f", "x"]},
    bio: {type: "string"}    
});

exports.User.index({name: 1}, {unique: true}).exec();