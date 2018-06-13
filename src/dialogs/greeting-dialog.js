module.exports = function(bot) {
    bot.dialog('GreetingDialog',
        (session) => {
            setTimeout('', 1000);
            session.send('Good afternoon. How can i help you?');
            session.endDialog();
        }
    ).triggerAction({
        matches: 'greeting'
    });
};