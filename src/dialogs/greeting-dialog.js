module.exports = function(bot) {
    bot.dialog('GreetingDialog',
        (session) => {
            session.send('Good afternoon. How can i help you?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'greeting'
    });
};