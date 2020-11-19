var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs');
const { Role } = require('discord.io');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const { ALL } = require('dns');
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
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
bot.on('message', function (user, userID, channelID, message, event) {
        if(message == ('^autoclear')){
          bot.sendMessage({
            to: channelID,
            message: 'Autoclear activated'
          });
          bot.getMessages({
            channelID: channelID,
            limit: 500
          }, function(error, result){
            var ids = []
            for(var i = 0; i < result.length; i++){
              ids.push(result[i]['id'])
            }
            bot.deleteMessages({
              channelID: channelID,
              messageIDs: ids
            })
          })
        }
});
while(true){
  var date = new Date();
  if(date.getHours() == "24"){
    bot.getMessages({
      channelID: channelID,
      limit: 500
    }, function(error, result){
      var ids = []
      for(var i = 0; i < result.length; i++){
        ids.push(result[i]['id'])
      }
      bot.deleteMessages({
        channelID: channelID,
        messageIDs: ids
      })
    })
  }
}