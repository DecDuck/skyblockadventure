var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if(!message.startsWith("*()")){
        fs.appendFile("log.txt", user + " | " + message + "\n", function (err){
            logger.info("FS error");
        })
    }else{
        if(user == "DecDuck" || user == "Rubik_Tech"){
            if(message == "*() output-log"){
                bot.uploadFile({
                    to: channelID,
                    file: "log.txt"
                })
            }
            if(message == "*() clear-log"){
                fs.truncate("./log.txt", 0, function(){
                    bot.sendMessage({
                        to: channelID,
                        message: "Cleared logs"
                    })
                })
            }
            if(message == "*() get-template"){
                bot.uploadFile({
                    to: channelID,
                    file: "bottemplate.zip"
                })
            }
        }
    }
});