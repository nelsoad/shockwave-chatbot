module.exports = function(bot) {
    bot.dialog('GreetingDialog',
        (session) => {
            session.send('You reached the GREEEEEEETINGSSSSSSSSSS intent. You said \'%s\'.', session.message.text);
            session.endDialog();
        }
    ).triggerAction({
        matches: 'Greeting'
    });
};