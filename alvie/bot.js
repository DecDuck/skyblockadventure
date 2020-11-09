var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs')
const {Wit, log} = require('node-wit');
const {interactive} = require('node-wit');
const client = new Wit({
    accessToken: "4U2TAIKBKT5456SX5GKXHI6HEBNKRJQF"
})
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
function jsonParser(stringValue) {

    var string = JSON.stringify(stringValue);
    var objectValue = JSON.parse(string);
    return objectValue;
 }
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if(channelID == "774750829017432185" && user != "Alvie" || message.includes("alvie") && user != "Alvie" || message.guild == null && user != "Alvie"){
        client.message(message, {}).then((data) => {
            var response = jsonParser(data);
            
        });
    }
});