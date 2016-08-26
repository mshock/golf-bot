var Discord = require("discord.js");

var config = require('./config');

var client = new Discord.Client();

client.on("message", function(message) {
    var default_channel = client.servers.get("name", "Code Golf").defaultChannel;
    var m = message.content
    if(m === "ping") {
        client.reply(message, "pong");
    }
    else if (m === "greeting") { 
        var greetings = ["I think you ought to know I'm feeling very depressed", "This will all end in tears", "Do you want me to sit in a corner and rust or just fall apart where I'm standing?"];
        var greeting = greetings[Math.floor(Math.random()*greetings.length)];
        client.sendMessage(default_channel, greeting);
    }
    // wacky unsafe PoC, TODO: run in docker container
    else if (m.startsWith("run ")) { 
        var exec = require('child_process').exec;
        var cmd = m.replace(/run /, '');
        exec(cmd, function(error, stdout, stderr) {
            client.sendMessage(default_channel, stdout);
        });
    }
});

client.loginWithToken(config.token);