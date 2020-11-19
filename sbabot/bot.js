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
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    var name = "/help"
var type = 0;
var url = "https://www.twitch.tv/legendarysharkkk";
bot.setPresence({
    game: {
        name,
        type,
        url
}});
});
bot.on('message', function (user, userID, channelID, message, evt) {
if(channelID == ('775222176977911808')){
    if(message == ("/drag")){
        var drop = randomItem(['Aotd', 'Chestplate', 'Leggings', 'Helmet', 'Boots']) 
        var drag = randomItem(['Superior', 'Unstable', 'Unstable', 'Unstable', 'Unstable', 'Strong', 'Strong', 'Strong', 'Strong', 'Young', 'Young', 'Young', 'Young', 'Old', 'Old', 'Old', 'Old', 'Wise', 'Wise', 'Wise', 'Wise', 'Protector', 'Protector', 'Protector', 'Protector'])
        if(drop == 'Aotd'){
            dragdrop = drop
        }else{
            var dragdrop = drag + ' ' + drop
        }
        bot.sendMessage({
            to: channelID,
            message: "<@!" + userID + ">"
        });
        bot.sendMessage({
            to: channelID,
            message: drag
        });
        bot.sendMessage({
            to: channelID,
            message: 'You got a ' + dragdrop + '!'
        });
    }
}
});
bot.on('message', function (user, userID, channelID, message, evt) {
if(channelID == ('775574992905306112')){
    if(message == ("/fz")){
        
        bot.sendMessage({
            to: channelID,
            message: drag
        });
    }
}
});