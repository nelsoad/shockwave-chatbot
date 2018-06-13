/*-----------------------------------------------------------------------------
A simple Language Understanding (LUIS) bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');
var botbuilder_azure = require("botbuilder-azure");

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    openIdMetadata: process.env.BotOpenIdMetadata 
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

var tableName = 'botdata';
var azureTableClient = new botbuilder_azure.AzureTableClient(tableName, process.env['AzureWebJobsStorage']);
var tableStorage = new botbuilder_azure.AzureBotStorage({ gzipData: false }, azureTableClient);

// Create your bot with a function to receive messages from the user
// This default message handler is invoked if the user's utterance doesn't
// match any intents handled by other dialogs.
var bot = new builder.UniversalBot(connector, function (session, args) {
   session.send('Hi.. i dont think i will be able to help you. Let me connect you to my call center rep who can help.');
});

bot.set('storage', tableStorage);

// Make sure you add code to validate these fields
var luisAppId = process.env.LuisAppId;
var luisAPIKey = process.env.LuisAPIKey;
var luisAPIHostName = process.env.LuisAPIHostName || 'westus.api.cognitive.microsoft.com';

const LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v2.0/apps/' + luisAppId + '?subscription-key=' + luisAPIKey;

// Create a recognizer that gets intents from LUIS, and add it to the bot
var recognizer = new builder.LuisRecognizer(LuisModelUrl);
bot.recognizer(recognizer);

// Add a dialog for each intent that the LUIS app recognizes.
// See https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-recognize-intent-luis 

require('./src/dialogs/greeting-dialog')(bot);
require('./src/dialogs/help-dialog')(bot);
require('./src/dialogs/cancel-dialog')(bot);
require('./src/dialogs/common-mistakes-dialog')(bot);
require('./src/dialogs/customer-zip-dialog')(bot);
require('./src/dialogs/find-rep-dialog')(bot);
require('./src/dialogs/fr-list-dialog')(bot);
require('./src/dialogs/issues-dialog')(bot);
require('./src/dialogs/planner-dialog')(bot);
require('./src/dialogs/recommend-fr-dialog')(bot);
require('./src/dialogs/rio-account-dialog')(bot);
require('./src/dialogs/rio-credit-dialog')(bot);
require('./src/dialogs/roth-ira-article-dialog')(bot);
require('./src/dialogs/schedule-time1-dialog')(bot);
require('./src/dialogs/schedule-time2-dialog')(bot);
require('./src/dialogs/schedule-time3-dialog')(bot);
require('./src/dialogs/thankcustomer-dialog')(bot);
