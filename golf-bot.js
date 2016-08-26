var Discord = require("discord.js");

var config = require('./config');

var client = new Discord.Client();

client.on("message", function(message) {
    var chan_gen = client.servers.get("name", "Code Golf").channels.get("name", "general");
    var m = message.content
    if(m === "ping") {
        client.reply(message, "pong");
    }
    else if (m === "greeting") { 
        client.sendMessage(chan_gen, "Hi Chat!");
    }
});

client.loginWithToken(config.token);