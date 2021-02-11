var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs')
var gis = require('g-i-s');
var wd = require("word-definition");
var capitalize = require('capitalize')
const {Wit, log} = require('node-wit');
const {interactive} = require('node-wit');
const client = new Wit({
    accessToken: ""
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
 function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    var name = "Waiting for someone."
    var type = 3;
    var url = "https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-1/p148x148/59203809_2545900215422810_1583997901703479296_o.png";
    bot.setPresence({
        game: {
            game: name
        }
    });
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if(channelID == "774750829017432185" && user != "Alvie" || message.includes("<@!775244639409668126>") && user != "Alvie"){
        if(message.includes("<@!775244639409668126>")){
            message = message.replace("<@!775244639409668126>", "alvie");
        }
        client.message(message, {}).then((data) => {
            var response = jsonParser(data);
            logger.info(response);
            if(response['intents'].length == 0){
                bot.sendMessage({
                    to: channelID,
                    message: choose([
                        "Sorry, I couldn't understand. Please try refrasing your request.",
                        "Sorry, what?",
                        "Could you say that again? I didn't quite understand you."
                    ])
                })
            }
            if(response['intents'][0]['name'] == "greeting"){
                bot.sendMessage({
                    to: channelID,
                    message: choose([
                        "Hi, what's up?",
                        "Hello! What do you need?",
                        "Hey, you called?"
                    ])
                })
            }
            if(response['intents'][0]['name'] == "time_question"){
                let date = new Date()
                bot.sendMessage({
                    to: channelID,
                    message: choose([
                        "The time is (time)",
                        "It's (time)",
                        "(time)"
                    ]).replace("(time)", date.getHours() + ":" + date.getMinutes())
                })
            }
            if(response['intents'][0]['name'] == "google_search"){
                var search = message.match(new RegExp("\"" + "(.*)" + "\""))[0].replace("\"", "").replace("\"", "");
                gis(search, function (error, results){
                    bot.sendMessage({
                        to: channelID,
                        message: results[0]['url']
                    });
                });

            }
            if(response['intents'][0]['name'] == "definition"){
                var word = message.match(new RegExp("\"" + "(.*)" + "\""))[0].replace("\"", "").replace("\"", "");
                wd.getDef(word, "en", null, function(definition) {
                    bot.sendMessage({
                        to: channelID,
                        message: capitalize(choose([
                            "Definition: (def)",
                            "It is (def)"
                        ]).replace("(def)", definition['definition']))
                    });
                });
                
            }
            if(response['intents'][0]['name'] == "change_username"){
                var name = message.match(new RegExp("\"" + "(.*)" + "\""))[0].replace("\"", "").replace("\"", "");
                bot.editNickname({
                    userID: userID,
                    serverID: "774726528457769020",
                    name: name
                }, function(error, response){
                    console.log(response);
                    console.log(error);
                })
                bot.sendMessage({
                    to: channelID,
                    message: choose([
                        "Sure, changed your nickname",
                        "Just changed your name"
                    ])
                })
            }
        });
    }
});