const randomItem = require('random-item')
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
if(channelID == ('775222176977911808')){
    if(message.startsWith("/drag")){
        var drag = randomItem(['Superior', 'Unstable', 'Unstable', 'Unstable', 'Unstable', 'Strong', 'Strong', 'Strong', 'Strong', 'Young', 'Young', 'Young', 'Young', 'Old', 'Old', 'Old', 'Old', 'Wise', 'Wise', 'Wise', 'Wise', 'Protector', 'Protector', 'Protector', 'Protector'])
        bot.sendMessage({
            to: channelID,
            message: "<@!" + userID + ">"
        });
        bot.sendMessage({
            to: channelID,
            message: drag
        });
    }
    if(message == "who's the best?"){
        bot.sendMessage({
            to: channelID,
            message: "decduck is the best!"
        })
    }
}
});
bot.on('message', function (user, userID, channelID, message, evt) {
if(channelID == ('775222176977911808')){
    if(message.startsWith("/")){
        
    }
}
});
